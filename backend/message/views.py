from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from .serializers import MessageSerializer

from .models import Message

class ClientMessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        """
        This view should return a list of all the messages
        for the currently authenticated user.
        """
        user = self.request.user
        if type(user) == int:
            return Message.objects.filter(clientID=user)
        else:
            return Message.objects.filter(clientID=0)
        