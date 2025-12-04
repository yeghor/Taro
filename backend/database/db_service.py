from abc import ABC, abstractmethod
from typing import List
from db_models import TaroCard
from sqlalchemy.orm import Session

class DBServiceABC(ABC):
    @abstractmethod
    def close(self) -> None:
        """Closes session, call required, preferably in finally block"""

    @abstractmethod
    def get_cards() -> List[TaroCard]:
        """Get all cards"""


class DBService(DBServiceABC):
    def __init__(self, session: Session):
        self._session = session

    def close(self):
        self._session.close()

    def get_cards() -> List[TaroCard]:
        pass