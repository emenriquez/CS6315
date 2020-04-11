from rest_framework.generics import ListAPIView, RetrieveAPIView
from django.db.models import F

from contractor.models import Contractor, Skill
from .serializers import ContractorSerializer, SkillSerializer

class ContractorListView(ListAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer


class ContractorDetailView(RetrieveAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer

class SkillListView(ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer