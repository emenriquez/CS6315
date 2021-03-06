from rest_framework import serializers
from contractor.models import Contractor, Skill, City


class SkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = Skill
        fields = ['skillType']

class CitySerializer(serializers.ModelSerializer):

    class Meta:
        model = City
        fields = '__all__'

class ContractorSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Contractor
        fields = ('id', 'first_name', 'last_name', 'email', 'company_name', 'skill', 'city')