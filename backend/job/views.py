from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from .serializers import JobSerializer

from .models import Job

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.order_by('-dateRequested')
    serializer_class = JobSerializer
    permission_classes = [AllowAny]
    filterset_fields = ['clientID', 'contractorID', 'dateRequested', 'status']