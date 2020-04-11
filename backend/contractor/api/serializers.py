from rest_framework import serializers
from contractor.models import Contractor, Skill


class SkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = Skill
        fields = ['skillType']

class ContractorSerializer(serializers.ModelSerializer):
    

    class Meta:
        model = Contractor
        fields = ('id', 'firstName', 'lastName', 'skill')