"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
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
from userAccount.views import RegisterView

from rest_framework.routers import DefaultRouter
from job.views import JobViewSet
from message.views import ClientMessageViewSet, ContractorMessageViewSet

#Configure JobViewSet
router = DefaultRouter()
router.register(r'jobs', JobViewSet)
router.register(r'clientmsg', ClientMessageViewSet, basename='clientmsg')
router.register(r'contractormsg', ContractorMessageViewSet, basename='contractormsg')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('contractor.api.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', RegisterView.as_view()),
    path('', include(router.urls)),
]
