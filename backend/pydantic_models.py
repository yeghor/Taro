from pydantic import BaseModel
from typing import List

class ContainsImg(BaseModel):
    image_name: str

class Card(BaseModel):
    name: str
    description: str 

class CardExtended(ContainsImg, Card):
    flipped: bool

class FullCard(ContainsImg, Card):
    """Contains both flipped and regular description"""
    flipped_description: str
    image_name: str

class PredictionResponse(BaseModel):
    prediction: str 
    cards: List[CardExtended] 

class CardsResponse(BaseModel): 
    cards: List[FullCard]

