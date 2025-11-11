from abc import abstractmethod, ABC

import Bcrypt

class PasswordServiceAbstract(ABC):
    @abstractmethod
    def hash_password(self, password: str) -> str:
        """Method that hashes and returning password hash string"""

    @abstractmethod
    def verify_password(self, entered_password: str, hashed_password: str) -> bool:
        """Method that verifies password entered by user"""

