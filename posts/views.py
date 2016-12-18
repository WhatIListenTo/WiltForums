from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response

from .models import Post
from .serializers import PostSerializer


class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        queryset = Post.objects.all()
        q = self.request.query_params.get

        # posts/?latest=10
        if q('latest'):
            queryset = queryset.order_by('-created_at')[:int(q('latest'))]
        return queryset
