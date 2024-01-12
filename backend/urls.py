"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/', include('main_app.urls')), 
    path('summernote/', include('django_summernote.urls')),
    # path("login/", main_app_views.UserLoginAPIView.as_view(), name="login-user"),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'), 
    path('login/verify/', TokenVerifyView.as_view(), name='token_verify'),
    # path("register/", main_app_views.UserRegisterationAPIView.as_view(), name="create_user"),
    # path("logout/", main_app_views.UserLogoutAPIView.as_view(), name="logout-user"),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



#Modify Site Header
admin.site.site_header = 'Open Data Administration'
#Modify Site Title
admin.site.site_title = 'Open Data'
#Modify Site Index Title
admin.site.index_title = 'Open Data Administration'


