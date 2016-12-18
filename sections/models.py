from django.db import models


class Section(models.Model):
    name = models.CharField(max_length=72)
    description = models.CharField(max_length=280)

    def __str__(self):
        return self.name
