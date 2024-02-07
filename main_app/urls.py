from django.urls import path,include               
from .views import *
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)



urlpatterns = [
    # path('api/user/', userList),
    path("login/", UserLoginAPIView.as_view(), name="login_user"),
    path("register/", UserRegisterationAPIView.as_view(), name="create_user"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), 
    path("logout/", UserLogoutAPIView.as_view(), name="logout_user"),
]