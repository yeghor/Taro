from sqlalchemy.orm import Session

from project_types import TaroTypes
from upload_card_db import taro_data
from gemini_service import AIServiceABC, GeminiService
from database.db_service import DBServiceABC, DBService

class MainService:
    def __init__(self, session: Session, predict_type: TaroTypes, prompt: str, AIServiceClass: AIServiceABC = GeminiService, DBServiceClass: DBServiceABC = DBService):
        self.AIService: AIServiceABC = AIServiceClass()
        self.DBService: DBServiceABC = DBServiceClass(session)

        self.predictType = predict_type
        self.prompt = prompt

    def predict(self) -> str:
        pass