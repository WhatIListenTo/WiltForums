# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-18 07:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('threads', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='thread',
            name='views',
            field=models.IntegerField(default=1),
        ),
    ]