from .models import Advert,User,FeedBack
from rest_framework.serializers import ModelSerializer

class AdvertSerializer(ModelSerializer):
    class Meta:
        model = Advert
        fields = '__all__' 

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__' 

class FeedBackSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__' 