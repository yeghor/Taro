from abc import abstractmethod, ABC

import bcrypt
import re
import pytest

class PasswordServiceAbstract(ABC):
    @abstractmethod
    def hash_password(self, password: str) -> str:
        """Method that hashes and returning password hash string"""

    @abstractmethod
    def verify_password(self, entered_password: str, hashed_password: str) -> bool:
        """Method that verifies password entered by user"""

class PasswordService(PasswordServiceAbstract):

    def hash_password(self, password: str) -> str:
        # password = bcrypt.hash_password(password)
        pass_bytes = password.encode('utf-8')
        salt = bcrypt.gensalt()
        hash_password = bcrypt.hashpw(pass_bytes, salt)
        return hash_password.decode('utf-8')

    def verify_password(self, entered_password: str, hashed_password: str) -> bool:
        entered_password_bytes = entered_password.encode('utf-8')
        hashed_password_bytes = hashed_password.encode('utf-8')

        try:
            return bcrypt.checkpw(entered_password_bytes, hashed_password_bytes)
        except ValueError:
            return False

    """
    class ValidationError(Exception):
    pass


class ValidationService:

    pattern = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$'

    def validate_password(self, entered_password: str, hashed_password: str) -> bool:
        pattern_to_use = self.pattern
        if not re.match(pattern_to_use, entered_password):
            raise ValidationError()
        return True

    def test_validation_serv(self):

        try:
            self.validate_password('', '')
        except ValidationError:
            pytest.fail('Try with new password')
            
            with pytest.raises(ValidationError):
            serv.validate_password('', '')

        assert serv.validate_password('', pattern'') == True
    """
