from django.contrib.auth.models import User
from django.core.validators import RegexValidator
from django.db import models


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.CharField(
        null=False,
        blank=False,
        max_length=500,
    )
    postal_code = models.CharField(
        null=False,
        blank=False,
        max_length=5,
    )
    city = models.CharField(
        null=False,
        blank=False,
        max_length=40,
    )
    phone = models.CharField(
        blank=False,
        null=False,
        validators=[RegexValidator(r"\d{10}")],
        max_length=10,
    )

    @property
    def full_address(self) -> str:
        return f"{self.address}, {self.postal_code} {self.city}"


class ResetPassword(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    request_hash = models.CharField(null=False, blank=False, max_length=128)
    created = models.DateTimeField(auto_now=True)
