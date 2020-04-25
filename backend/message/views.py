from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from .serializers import MessageSerializer

from .models import Message

class ClientMessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    permission_classes = [AllowAny]
    filterset_fields = ['jobID']

    def get_queryset(self):
        """
        This view should return a list of all the messages
        for the currently authenticated user.
        """
        user = self.request.user.username
        print(user)
        return Message.objects.filter(clientID=user).order_by('-messageDate')
        
class ContractorMessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    permission_classes = [AllowAny]
    filterset_fields = ['jobID']

    def get_queryset(self):
        """
        This view should return a list of all the messages
        for the currently authenticated user.
        """
        user = self.request.user.id
        return Message.objects.filter(contractorID=user).order_by('-messageDate')