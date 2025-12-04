from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends
from pydantic_models import Schema

from database.db_connect import get_sesstion_depends

main_router = APIRouter()

# http://localhost:8000/predict

@main_router.get("/predict/{tarot_type}/{prompt}")
def predict(
    tarot_type: str,
    prompt: str,
    session: Session = Depends(get_sesstion_depends)
):
    """
    1. Create main service class instance (क्लास का एक इंस्टेंस बनाएँ) 
    2. Call and return method in service that creates prediction
    """
