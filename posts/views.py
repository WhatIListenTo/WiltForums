from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response

from .models import Post
from .serializers import PostSerializer


class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
