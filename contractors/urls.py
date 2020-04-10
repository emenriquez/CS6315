from django.urls import path
from . import views

urlpatterns = [
    path('search', views.get_contractors),
    path('', views.homepage)
]
