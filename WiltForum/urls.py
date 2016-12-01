from django.conf import settings
from django.conf.urls import url, include
from django.contrib import admin
from django.conf.urls.static import static

from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views

from users.views import MemberView

router = DefaultRouter()
router.register(r'members', MemberView, base_name='members')

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include(
        'rest_framework.urls', namespace='rest_framework')),
] + static('/', document_root=settings.MEDIA_ROOT)
