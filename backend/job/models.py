from django.db import models

# Create your models here.
class Job(models.Model): 
    clientID = models.ForeignKey('userAccount.Account', on_delete=models.DO_NOTHING)
    contractorID = models.ForeignKey('contractor.Contractor', on_delete=models.DO_NOTHING)
    clientNotes = models.TextField(max_length=10000, default="No details provided")
    contractorNotes = models.TextField(max_length=10000, default="No details provided")
    dateRequested = models.DateTimeField(verbose_name="Date Joined", auto_now_add=True)
    contractorAccepted = models.BooleanField(default=False)
    clientConfirmed = models.BooleanField(default=False)
    complete = models.BooleanField(default=False)

    def __str__(self):
        return "{} => {} (Job: {})".format(self.clientID, self.contractorID, self.id)