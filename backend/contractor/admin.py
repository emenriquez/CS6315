from django.contrib import admin
from .models import Contractor, Skill, City

# Register your models here.
admin.site.register(Contractor)
admin.site.register(Skill)
admin.site.register(City)