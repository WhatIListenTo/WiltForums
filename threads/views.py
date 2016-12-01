from django.shortcuts import render
from rest_framework import viewsets, permissions
from threads.serializers import ThreadSerializer
from threads.models import Thread


class ThreadView(viewsets.ModelViewSet):
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer
