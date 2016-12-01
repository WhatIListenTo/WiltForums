from rest_framework import serializers
from django.core.validators import RegexValidator
from users.models import Member

alpha_only = RegexValidator('^[A-Za-z0-9_]+$', message='No unicode.')


class MemberSerializer(serializers.ModelSerializer):

    class Meta:
        model = Member
        fields = '__all__'
