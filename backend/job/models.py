from django.db import models

# Create your models here.
class Job(models.Model): 
    statusChoices = [
        ('requested', 'Requested'),
        ('accepted', 'Accepted'),
        ('declined', 'Declined'),
        ('completed', 'Completed')
    ]

    clientID = models.ForeignKey('userAccount.Account', to_field='username', on_delete=models.DO_NOTHING)
    contractorID = models.ForeignKey('contractor.Contractor', on_delete=models.DO_NOTHING)
    clientNotes = models.TextField(max_length=10000, default="No details provided")
    dateRequested = models.DateTimeField(verbose_name="Date Requested", auto_now_add=True)
    status = models.CharField(max_length=9, choices=statusChoices, default='requested')

    def __str__(self):
        return "{} => {} (Job: {})".format(self.clientID, self.contractorID, self.id)