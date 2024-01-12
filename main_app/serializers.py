from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
from .models import *

User = get_user_model()

from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password











class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model  = User
        fields = (
        	"id", 
        	"first_name", 
        	"last_name", 
        	"email", 
        	"role",
        	"i_agree",
        	"country", 
        	"city",
        	"birth_date",
        	"gender",
        	"photo",
        	"cv",
        	"phone",
        	"address",
        	"facebook",
        	"instagram",
        	"twitter",
        	"linked_in",
        	"is_active",
        )










class UserLoginSerializer(serializers.Serializer):
	email    = serializers.CharField()
	password = serializers.CharField(write_only=True)

	def validate(self, data):
		user = authenticate(**data)
		if user and user.is_active:
			return user
		raise serializers.ValidationError("No active accounts were found with the credentials provided")










class UserRegisterationSerializer(serializers.ModelSerializer):
	password   = serializers.CharField(write_only=True, required=True, validators=[validate_password])
	class Meta:
		model  = User
		fields = ("id", "first_name", "last_name", "email", "password")
		extra_kwargs = {"password": {"write_only": True}}
	# def validate(self, attrs):
	# 	if not attrs['i_agree']:
	# 		raise serializers.ValidationError({"i_agree": "Ce champ ne peut être vide."})
	# 	return attrs

	def create(self, validated_data):
		return User.objects.create_user(**validated_data)











class ChangePasswordSerializer(serializers.Serializer):
	password     = serializers.CharField(write_only=True, required=True, validators=[validate_password])
	password2    = serializers.CharField(write_only=True, required=True)
	old_password = serializers.CharField(write_only=True, required=True)

	def validate(self, attrs):
		if attrs['password'] != attrs['password2']:
			raise serializers.ValidationError({"password": "Password fields do not match."})
		return attrs











class CountrySerializer(serializers.ModelSerializer):
	class Meta:
		model  = Country
		fields = [
			'id',
			'name',
			'timestamp', 
			'updated',
			'slug'
		]
		read_only_fields = ['id', 'timestamp', 'updated', 'slug']









class CitySerializer(serializers.ModelSerializer):
	class Meta:
		model  = City
		fields = [
			'id',
			'name',
			'country',
			'country_name', 
			'timestamp', 
			'updated',
			'slug'
		]
		read_only_fields = ['id', 'timestamp', 'updated', 'slug']












class JobCategorySerializer(serializers.ModelSerializer):
	class Meta:
		model  = JobCategory
		fields = [
			'id',
			'name', 
			'timestamp', 
			'updated',
			'slug'
		]
		read_only_fields = ['id', 'timestamp', 'updated', 'slug']












class JobSerializer(serializers.ModelSerializer):
	class Meta:
		model  = Job
		fields = [
			'id',
			'job_type', 
			'reference',
			'job_field', 
			'name',
			'experience',
			"deadline",
			"salary",
			"currency",
			"city",
			"description",
			"timestamp",
			"updated",
			"slug"
		]
		read_only_fields = ['id', 'timestamp', 'updated', 'slug']









class JobApplySerializer(serializers.ModelSerializer):
	class Meta:
		model  = JobApply
		fields = [
			'id',
			'user', 
			'job',
			'timestamp', 
			'updated',
		]
		read_only_fields = ['id', 'timestamp', 'updated']






