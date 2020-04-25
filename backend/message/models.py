from django.db import models
import uuid

# Create your models here.
class Message(models.Model):
    id = models.CharField(max_length=50, unique=True, default=uuid.uuid4, primary_key=True, blank=True)
    jobID = models.ForeignKey('job.Job', on_delete=models.DO_NOTHING)
    clientID = models.ForeignKey('userAccount.Account', on_delete=models.DO_NOTHING, to_field='username')
    contractorID = models.ForeignKey('contractor.Contractor', on_delete=models.DO_NOTHING)
    messageDate = models.DateTimeField(verbose_name="Date Requested", auto_now_add=True)
    messageText = models.TextField(max_length=10000, null=False, default="Message Body")
