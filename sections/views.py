from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response

from .models import Section
from .serializers import SectionSerializer


class SectionView(viewsets.ModelViewSet):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer    
