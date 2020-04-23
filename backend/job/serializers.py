from rest_framework import serializers
from .models import Job


class JobSerializer(serializers.ModelSerializer):

    class Meta:
        model = Job
        fields = '__all__'
        filterset_fields = ['clientID', 'contractorID', 'dateRequested', 'contractorAccepted', 'clientConfirmed', 'active', 'complete']