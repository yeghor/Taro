from project_types import TaroTypes, TaroData
from database.db_models import TarotCard
from database.db_connect import session_local
from database.db_service import DBService
import json
from typing import List, Dict
import uuid

taro_data: TaroData = {
    "love": "Reveals emotional dynamics, intentions, hidden tensions and potential outcomes in relationships. Focuses on how two people align, what blocks them, and where the connection is heading.",
    "future": "Gives a snapshot of likely upcoming events if things continue as they are. Not fate, but a probability curve shaped by your current choices and momentum.",
    "career": "Shows work-related trends: opportunities, risks, motivation, burnout markers and how your actions might influence professional growth or stagnation.",
    "impression": "Reflects how someone currently perceives you — your energy, your strengths, your weaknesses, and the overall vibe you project in their eyes."
}
# https://www.tarot.com/tarot/cards

# Load original JSON cards data
def get_json() -> List[Dict]:
    with open('backend/original_data/cards_data.json', 'r') as f:
        return json.load(f)

# print({"TaroType": taro_data, "TaroCards": tarot_cards})

def reupload_cards_data_to_db() -> None:
    """Upload JSON cards data to SQLite DB"""
    
    tarot_cards = get_json()

    db_cards = [
        TarotCard(
            card_id=str(str(uuid.uuid4())),
            card_name=card["card_name"],
            img_name=card["card_name"],
            regular_desc=card["regular_desc"] if card["regular_desc"] else "",
            flipped_desc=card["flipped_desc"] if card["flipped_desc"] else ""
        ) for card in tarot_cards
    ]

    db = DBService(session_local())
    db.insert_models(*db_cards)
    db.commit_and_close(commit=True)

# reupload_cards_data_to_db()