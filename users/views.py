from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from users.serializers import MemberSerializer
from users.models import Member


class MemberView(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        # TODO: IsOwnerOrReadOnly
    )
