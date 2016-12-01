from django.db import models

from users.models import Member
from posts.models import Post
from sections.models import Section


class Thread(models.Model):
    title = models.CharField(max_length=80)
    section = models.ForeignKey(Section)
    op = models.ForeignKey(Post)
    author = models.ForeignKey(Member)

    def __str__(self):
        return self.title


