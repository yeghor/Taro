from fastapi import APIRouter


main_router = APIRouter()

# http://localhost:8000/predict
@main_router.get("/predict/{type}/")
def predict(
    type_: str,
    prompt: str
):
    return type_, prompt