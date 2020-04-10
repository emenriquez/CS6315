from django.db import models
from multiselectfield import MultiSelectField

# Create your models here.


class Skill(models.Model):
    skillChoices = [
        ('electrician', 'Electrician'),
        ('plumber', 'Plumber'),
        ('housekeeper', 'Housekeeper')
    ]

    skillList = models.CharField(
        max_length=100, choices=skillChoices, null=True)


class Contractor(models.Model):
    firstName = models.CharField(default='Joe', max_length=100)
    lastName = models.CharField(default='Average', max_length=100)
    skills = MultiSelectField(
        choices=Skill.skillChoices, default='housekeeper')
    availableNow = models.BooleanField(default=True)
