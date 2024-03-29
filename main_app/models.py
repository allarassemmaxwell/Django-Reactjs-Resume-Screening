# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from datetime import date, timedelta

from django.conf import settings

import uuid
from django.db import models
from django.db.models.fields import DateField
from django.dispatch import receiver

from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin

from django.core import validators


from django.urls import reverse

import random   
import string  
import secrets 

from django.core.exceptions import ValidationError
from django.core.files.images import get_image_dimensions

from mimetypes import guess_type

from djmoney.models.fields import MoneyField



from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill









# GENERATE RANDOM STRING WITH LENGTH 
def random_string(num):   
    res = ''.join(secrets.choice(string.ascii_letters + string.digits) for x in range(num))  
    return str(res)




# COUNTRY MODEL
class Country(models.Model):
    name      = models.CharField(_("Name"), max_length=255, null=False, blank=False, unique=True)
    code      = models.CharField(_("Code"), max_length=255, null=True, blank=False, unique=True)
    active    = models.BooleanField(_("Status"), default=True)
    timestamp = models.DateTimeField(_("Created At"), auto_now_add=True, auto_now=False)
    updated   = models.DateTimeField(_("Updated At"), auto_now_add=False, auto_now=True)
    slug      = models.SlugField(_("Slug"), max_length=255, null=True, blank=True, editable=False, unique=False)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ("name",)
        verbose_name_plural = _("Countries")











# CITY MODEL
class City(models.Model):
    country   = models.ForeignKey(Country, on_delete=models.CASCADE, null=False, blank=False, related_name="city_country")
    name      = models.CharField(_("Name"), max_length=255, null=False, blank=False, unique=True)
    active    = models.BooleanField(_("Status"), default=True)
    timestamp = models.DateTimeField(_("Created At"), auto_now_add=True, auto_now=False)
    updated   = models.DateTimeField(_("Updated At"), auto_now_add=False, auto_now=True)
    slug      = models.SlugField(_("Slug"), max_length=255, null=True, blank=True, editable=False, unique=False)

    def __str__(self):
        return self.name

    def country_name(self):
        name = self.country.name
        return name

    class Meta:
        ordering = ("name",)
        verbose_name_plural = _("Cities")









# Create your models here.
class UserManager(BaseUserManager):
    use_in_migrations = True
    def save_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError(_("The given email must be set"))
        email = self.normalize_email(email)
        user  = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields['is_superuser'] = False
        extra_fields['is_staff'] = False
        return self.save_user(email, password, **extra_fields)

    def create_staffuser(self, email, password, **extra_fields):
        extra_fields['is_staff'] = True
        extra_fields['is_superuser'] = False
        
        return self.save_user(email, password, **extra_fields) 

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_("is_superuser should be true"))
        extra_fields['is_staff'] = True
        return self.save_user(email, password, **extra_fields) 
    













ROLE = (
    ("User", _("User")),
    ("Admin", _("Administrateur")),
)
GENDER_CHOICES = (
    ('Male', 'Male'),
    ('Female', 'Female'),
)
class User(AbstractBaseUser, PermissionsMixin):
    id         = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(_("First name"), max_length=255, null=False, blank=False)
    last_name  = models.CharField(_("Last name"), max_length=255, null=False, blank=False)
    email      = models.EmailField(_("Email"), max_length=255, unique=True, validators = [validators.EmailValidator()])
    is_staff   = models.BooleanField(default=False)
    is_active  = models.BooleanField(default=True)
    i_agree    = models.BooleanField(_("Terms and conditions"), blank=False, null=True, default=False)
    role       = models.CharField(_("Role"), max_length=100, choices=ROLE, null=True, blank=True, default='User')
    country    = models.ForeignKey(Country, on_delete=models.CASCADE, null=True, blank=True, related_name="profile_country")
    city       = models.ForeignKey(City, on_delete=models.CASCADE, null=True, blank=True, related_name="profile_city")
    birth_date = models.DateField(_("Date of birth"), null=True, blank=True)
    gender     = models.CharField(_("Sexe"), max_length=10, choices=GENDER_CHOICES, null=True, blank=True)
    photo      = models.ImageField(_("Photo"), upload_to="profile/%Y/%m/", null=True, blank=True)
    thumbnail  = ImageSpecField(source='photo',
        processors=[ResizeToFill(100, 34)],
        format='JPEG',
        options={'quality': 100}
    )
    cv         = models.FileField(_("CV"), upload_to="cv/%Y/%m/", null=True, blank=True)
    phone      = models.CharField(_("Phone"), max_length=255, null=True, blank=True)
    address    = models.CharField(_("Address"), max_length=255, null=True, blank=True)
    facebook   = models.URLField(_("Facebook Link"), max_length=255, null=True, blank=True)
    instagram  = models.URLField(_("Instagram Link"), max_length=255, null=True, blank=True)
    twitter    = models.URLField(_("Twitter Link"), max_length=255, null=True, blank=True)
    linked_in  = models.URLField(_("Linked In Link"), max_length=255, null=True, blank=True)

    USERNAME_FIELD = 'email'
    objects = UserManager()

    def __str__(self):
        return self.email

    def get_full_name(self):
        name = None
        if self.first_name and self.last_name:
            name = self.first_name + " "+self.last_name
        elif self.first_name:
            name = self.first_name
        elif self.last_name:
            name = self.last_name
        return name

    def thumbnail(self):
        name = None
        if self.photo:
            name = self.thumbnail
        return name





















# BLOG CATEGORY MODEL
class JobCategory(models.Model):
    name      = models.CharField(_("Name"), max_length=255, null=False, blank=False, unique=True)
    active    = models.BooleanField(_("Status"), default=True)
    timestamp = models.DateTimeField(_("Created At"), auto_now_add=True, auto_now=False)
    updated   = models.DateTimeField(_("Updated At"), auto_now_add=False, auto_now=True)
    slug      = models.SlugField(_("Slug"), max_length=255, null=True, blank=True, editable=False, unique=False)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ("name",)
        verbose_name_plural = _("Job Categories")






JOB_TYPE = (
    ('Full Time', 'Full Time'),
    ('Part Time', 'Part Time'),
    ('Intern', 'Intern'),
    ('Remote', 'Remote'),
)

QUALIFICATION_CHOICES = (
    ('Diploma', 'Diploma'),
    ('Bachelor', 'Bachelor'),
    ('Master', 'Master'),
    ('PHD', 'PHD'),
)
# BLOG MODEL
class Job(models.Model):
    job_type    = models.CharField(_("Job Type"), max_length=20, choices=JOB_TYPE, null=True, blank=True)
    reference   = models.CharField(_("Reference"), max_length=255, null=True, blank=True, unique=False, editable=False)
    job_field   = models.ManyToManyField(JobCategory, blank=False, related_name="proper_category")
    name        = models.CharField(_("Name"), max_length=255, null=False, blank=False)
    experience  = models.CharField(_("Experience"), max_length=10, null=True, blank=True, default=0)
    deadline   	= models.DateField(_("Deadline"), null=True, blank=True)
    salary	  	= models.CharField(_("Salary(from - to)"), max_length=100, null=True, blank=True)
    currency    = MoneyField(max_digits=14, decimal_places=2, default_currency='USD', null=True, blank=True)
    city        = models.ForeignKey(City, on_delete=models.CASCADE, null=False, blank=False, related_name="job_city")
    description = models.TextField(_("Description"), null=False, blank=False)
    active      = models.BooleanField(_("Status"), default=True)
    timestamp   = models.DateTimeField(_("Created At"), auto_now_add=True, auto_now=False)
    updated     = models.DateTimeField(_("Updated At"), auto_now_add=False, auto_now=True)
    slug        = models.SlugField(_("Slug"), max_length=255, null=True, blank=True, editable=False, unique=False)

    def __str__(self):
        return self.name



    class Meta:
        ordering = ("-timestamp",)
        verbose_name_plural = _("Jobs")

















# DATA MEDIA
class JobApply(models.Model):
    user 	  = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=False, blank=False)
    job       = models.ForeignKey(Job, on_delete=models.CASCADE, null=False, blank=False, related_name="job_apply")
    active    = models.BooleanField(_("Status"), default=True)
    timestamp = models.DateTimeField(_("Created At"), auto_now_add=True, auto_now=False)
    updated   = models.DateTimeField(_("Updated At"), auto_now_add=False, auto_now=True)

    def __str__(self):
        return str(self.id)

    class Meta:
        ordering = ("-timestamp",)
        verbose_name_plural = _("Job applies")













