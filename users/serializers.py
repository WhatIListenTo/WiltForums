from rest_framework import serializers
from django.core.validators import RegexValidator
from users.models import Member

# TODO: use this
alpha_only = RegexValidator('^[A-Za-z0-9_]+$', message='No unicode.')


class MemberSerializer(serializers.ModelSerializer):

    class Meta:
        model = Member
        fields = ('username', 'email', 'wilt_name', 'post_count',
            'profile_picture', 'signature', 'date_joined')
