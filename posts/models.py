from django.db import models
from users.models import Member


class Post(models.Model):
    author = models.ForeignKey(Member)
