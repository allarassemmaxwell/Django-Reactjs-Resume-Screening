# signals.py

from django.contrib.auth.models import User
from django.db.models.signals import pre_save, post_save
from django.utils.text import slugify
from django.dispatch import receiver
from .models import *













# CREATE COUNTRY SLUG
def create_country_slug(instance, new_slug=None):
    slug = slugify(instance.name)
    if new_slug is not None:
        slug = new_slug
    ourQuery = Country.objects.filter(slug=slug)
    exists = ourQuery.exists()
    if exists:
        new_slug = "%s-%s" % (slug, ourQuery.first().id)
        return create_country_slug(instance, new_slug=new_slug)
    return slug

def presave_country(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = create_country_slug(instance)
pre_save.connect(presave_country, sender=Country)










# CREATE CITY SLUG
def create_city_slug(instance, new_slug=None):
    slug = slugify(instance.name)
    if new_slug is not None:
        slug = new_slug
    ourQuery = City.objects.filter(slug=slug)
    exists = ourQuery.exists()
    if exists:
        new_slug = "%s-%s" % (slug, ourQuery.first().id)
        return create_city_slug(instance, new_slug=new_slug)
    return slug

def presave_city(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = create_city_slug(instance)
pre_save.connect(presave_city, sender=City)










# CREATE COUNTRY SLUG
def create_job_cat_slug(instance, new_slug=None):
    slug = slugify(instance.name)
    if new_slug is not None:
        slug = new_slug
    ourQuery = JobCategory.objects.filter(slug=slug)
    exists = ourQuery.exists()
    if exists:
        new_slug = "%s-%s" % (slug, ourQuery.first().id)
        return create_job_cat_slug(instance, new_slug=new_slug)
    return slug

def presave_job_cat(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = create_job_cat_slug(instance)
pre_save.connect(presave_job_cat, sender=JobCategory)











# CREATE COUNTRY SLUG
def create_job_slug(instance, new_slug=None):
    slug = slugify(instance.name)
    if new_slug is not None:
        slug = new_slug
    ourQuery = Job.objects.filter(slug=slug)
    exists = ourQuery.exists()
    if exists:
        new_slug = "%s-%s" % (slug, ourQuery.first().id)
        return create_job_slug(instance, new_slug=new_slug)
    return slug

def presave_job(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = create_job_slug(instance)
pre_save.connect(presave_job, sender=Job)




