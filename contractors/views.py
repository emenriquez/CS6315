from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

from .models import Contractor, Skill


def get_contractors(request):
    context = {
        'list': Contractor.objects.all()
    }
    return render(request, 'contractorList.html', context)


def homepage(request):
    context = {
        'skills': Skill.objects.all()
    }

    return render(request, 'homepage.html', context)
