from .models import Advert,User,FeedBack,Address
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
        model = FeedBack
        fields = '__all__' 

class AddressSerializer(ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__' 

#Wilaya,City,,FavoriteAdvert,AdvertImage,Chat,Message