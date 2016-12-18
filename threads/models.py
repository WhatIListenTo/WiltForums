from django.db import models

from users.models import Member
from sections.models import Section


class Thread(models.Model):
    title = models.CharField(max_length=80)
    section = models.ForeignKey(Section)
    op = models.TextField(max_length=20000)
    author = models.ForeignKey(Member)

    def __str__(self):
        return '%s - %s' % (self.title, self.author.username)
