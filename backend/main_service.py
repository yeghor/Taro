from fastapi import HTTPException

from sqlalchemy.orm import Session

from project_types import TaroTypes, Language
from gemini_service import taro_data
from gemini_service import AIServiceABC, GeminiService
from database.db_service import DBServiceABC, DBService
from pydantic_models import PredictionResponse, CardExtended, FullCard
import random
from typing import List
from database.db_models import TarotCard



class MainService:
    def _check_all_attributes(self) -> bool:
        return (self.predict_type and self.prompt and self.lang)

    def __init__(self, session: Session, predict_type: TaroTypes | None, prompt: str | None, lang: Language | None, AIServiceClass: AIServiceABC = GeminiService, DBServiceClass: DBServiceABC = DBService):
        """Call close when you finish your work to respectfuly close db session"""

        self._AIService: AIServiceABC = AIServiceClass()
        self._DBService: DBServiceABC = DBServiceClass(session)

        self.predict_type = predict_type
        self.prompt = prompt
        self.lang = lang

    def predict(self) -> PredictionResponse:
        if not self._check_all_attributes():
            raise HTTPException(status_code=400, detail="Prediction options weren't provided")

        db_cards: List[TarotCard] = self._DBService.get_cards()
        cards = random.choices(db_cards, k=taro_data[self.predict_type]["k"])
        cards_state = [random.choice([False, True]) for _ in range(len(cards))]

        parced_cards = [CardExtended(name=card.card_name, image_name=card.img_name, description=card.regular_desc if cards_state[i] else card.flipped_desc, flipped=cards_state[i]) for i, card in enumerate(cards)]

        prediction = self._AIService.make_prediction(predict_type=self.predict_type, prompt=self.prompt, cards=parced_cards, lang=self.lang)

        return PredictionResponse(prediction=prediction, cards=parced_cards)

    def get_cards(self) -> List[CardExtended]:
        db_cards: List[TarotCard] = self._DBService.get_cards()

        return [FullCard(name=card.card_name, image_name=card.img_name, description=card.regular_desc, flipped_description=card.flipped_desc) for card in db_cards]

    def close(self, error: bool) -> str:
        self._DBService.commit_and_close(not error)