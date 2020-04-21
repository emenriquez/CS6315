from django.shortcuts import render
from rest_auth.registration.views import RegisterView
from .models import Account

# Create your views here.
class CustomRegisterView(RegisterView):
    queryset = Account.objects.all()