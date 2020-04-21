from django.db import models
from userAccount.models import Account
from rest_framework.permissions import AllowAny

# Create your models here.

class Contractor(models.Model):
    id = models.OneToOneField('userAccount.Account', on_delete=models.DO_NOTHING, primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    company_name = models.CharField(max_length=50, default=None)
    skill = models.ManyToManyField('Skill')
    city = models.ManyToManyField('City', verbose_name="Available Cities")

    permission_classes = [AllowAny]

    def __str__(self):
        if self.company_name:
            return self.company_name
        else:
            return "{} {}".format(self.first_name, self.last_name)


class Skill(models.Model): 
    skillType = models.CharField(max_length=50, primary_key=True)

    def __str__(self):
        return self.skillType

    def natural_key(self):
        return self.skillType

class City(models.Model): 
    city = models.CharField(max_length=50, primary_key=True)

    def __str__(self):
        return self.city

    def natural_key(self):
        return self.city
