from django.contrib import admin
from django.urls import path
from .views import sub_categories

urlpatterns = [
    path('sub-categories', sub_categories),
]
