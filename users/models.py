from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token


class Member(AbstractUser):
    profile_picture = models.ImageField(
        upload_to='cdn/images/avatars/', null=True, blank=True)
    wilt_name = models.CharField(max_length=40)
    signature = models.CharField(max_length=360)

    def __str__(self):
        return self.username
