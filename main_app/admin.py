# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin

from django.utils.translation import gettext_lazy as _

from .models import *

from django_summernote.admin import SummernoteModelAdmin










@admin.register(User)
class UserAdmin(DjangoUserAdmin):
    fieldsets = (
        (None, {'fields': ('email', 'role', 'first_name', 'last_name', 'i_agree', 'password')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
                                       'groups', 'user_permissions')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'role', 'password1', 'password2'),
        }),
    )
    list_display = ('email', 'first_name', 'last_name', 'i_agree', 'role', 'is_active', 'is_staff')
    search_fields = ('email', 'first_name', 'last_name', 'is_active', 'role', 'is_staff')
    ordering = ('email',)
    readonly_fields = ('last_login', 'i_agree',)
















# CONTACT ADMIN
class CountryAdmin(admin.ModelAdmin):
    date_hierarchy      = 'timestamp'
    list_display        = ['name', 'active', 'timestamp']
    list_display_links  = ['name',]
    list_filter         = ['name', 'active']
    search_fields       = ['name', 'active']
    list_per_page       = 50
    class Meta:
        model = Country
admin.site.register(Country, CountryAdmin)








# CONTACT ADMIN
class CityAdmin(admin.ModelAdmin):
    date_hierarchy      = 'timestamp'
    list_display        = ['name', 'country', 'active', 'timestamp']
    list_display_links  = ['name',]
    list_filter         = ['name', 'active']
    search_fields       = ['name', 'country__name', 'active']
    list_per_page       = 50
    class Meta:
        model = City
admin.site.register(City, CityAdmin)









# CONTACT ADMIN
class JobCategoryAdmin(admin.ModelAdmin):
    date_hierarchy      = 'timestamp'
    list_display        = ['name', 'active', 'timestamp']
    list_display_links  = ['name',]
    list_filter         = ['name', 'active']
    search_fields       = ['name', 'active']
    list_per_page       = 50
    class Meta:
        model = JobCategory
admin.site.register(JobCategory, JobCategoryAdmin)











# CONTACT ADMIN
class JobAdmin(admin.ModelAdmin):
    date_hierarchy      = 'timestamp'
    list_display        = ['name', 'job_type', 'active', 'timestamp']
    list_display_links  = ['name',]
    list_filter         = ['name', 'active']
    search_fields       = ['name', 'active']
    list_per_page       = 50
    class Meta:
        model = Job
admin.site.register(Job, JobAdmin)











# CONTACT ADMIN
class JobApplyAdmin(admin.ModelAdmin):
    date_hierarchy      = 'timestamp'
    list_display        = ['user', 'job', 'active', 'timestamp']
    list_display_links  = ['user',]
    list_filter         = ['user', 'active']
    search_fields       = ['user', 'active']
    list_per_page       = 50
    class Meta:
        model = JobApply
admin.site.register(JobApply, JobApplyAdmin)





