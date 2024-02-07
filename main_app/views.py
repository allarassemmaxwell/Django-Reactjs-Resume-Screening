from django.shortcuts import render
from .serializers import * 
from rest_framework import viewsets      
from .models import * 

from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import  Response
from rest_framework.decorators import api_view, permission_classes, renderer_classes
from rest_framework import generics
from rest_framework.generics import GenericAPIView, RetrieveUpdateAPIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.mail import send_mail, BadHeaderError
from django.contrib.auth import get_user_model
from django.conf import settings
User = get_user_model()

from decimal import Decimal


from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from rest_framework.decorators import parser_classes

import json
import base64
import datetime










# =========================================================
#                      USER LOGIN  
# =========================================================
class UserLoginAPIView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class   = UserLoginSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        serializer = UserSerializer(user)
        token = RefreshToken.for_user(user)
        data  = serializer.data
        data["tokens"] = {"refresh": str(token), "access": str(token.access_token)}
        return Response(data, status=status.HTTP_200_OK)










# =========================================================
#                   USER REGISTRATION 
# =========================================================
class UserRegisterationAPIView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserRegisterationSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user    = serializer.save()
        message = {"message": "Account created successfully."}
        return Response(message, status=status.HTTP_201_CREATED)













# =========================================================
#                     USER LOGOUT 
# =========================================================
class UserLogoutAPIView(GenericAPIView):
    # permission_classes = (IsAuthenticated,)
    def post(self, request, *args, **kwargs):
        print("========== LOG OUT ==========")
        print(request.data)
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)



