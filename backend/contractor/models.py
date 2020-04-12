from django.db import models

# Create your models here.

class Contractor(models.Model):
    firstName = models.CharField(max_length=50, null=False)
    lastName = models.CharField(max_length=50, null=False)
    skill = models.ManyToManyField('Skill')

    def __str__(self):
        return "{} {}".format(self.firstName, self.lastName)


class Skill(models.Model): 
    skillType = models.CharField(max_length=50, primary_key=True)

    def __str__(self):
        return self.skillType

    def natural_key(self):
        return self.skillType