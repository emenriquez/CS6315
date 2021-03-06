from rest_framework.permissions import AllowAny
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    RetrieveUpdateDestroyAPIView
  )

from contractor.models import (
    Contractor,
    Skill,
    City
    )

from .serializers import (
    ContractorSerializer,
    SkillSerializer,
    CitySerializer
    )



class ContractorListView(ListAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer
    filterset_fields = ['skill', 'city']

class ContractorDetailView(RetrieveAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer

class SkillListView(ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class CityListView(ListAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer

class ContractorCreateView(CreateAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer
    permission_classes = [AllowAny]

class ContractorRUDView(RetrieveUpdateDestroyAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer
    permission_classes = [AllowAny]