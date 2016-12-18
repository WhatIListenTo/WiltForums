from django.db import models

from users.models import Member
from threads.models import Thread


class Post(models.Model):
    author = models.ForeignKey(Member)
    thread = models.ForeignKey(Thread)
    body = models.TextField(max_length=20000)
    created_at = models.DateTimeField(auto_now_add=True)
