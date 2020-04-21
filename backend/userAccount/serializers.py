# Registration
from rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from userAccount.models import Account

class CustomRegisterSerializer(RegisterSerializer):

    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    city = serializers.CharField(required=True)

    def get_cleaned_data(self):
        super(CustomRegisterSerializer, self).get_cleaned_data()

        return {
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'username': self.validated_data.get('username', ''),
            'first_name': self.validated_data.get('first_name', ''),
            'last_name': self.validated_data.get('last_name', ''),
            'city': self.validated_data.get('city', ''),
        }
    
    def save(self, request):
        user = super().save(request)
        user.city = self.data.get('city')
        user.save()
        return user

class CustomUserDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Account
        fields = ('id', 'email','username', 'first_name','last_name', 'city', 'is_contractor')
        read_only_fields = ('email','username')