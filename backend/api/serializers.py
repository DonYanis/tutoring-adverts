from .models import Advert,User,FeedBack,Address,City,Wilaya
from rest_framework.serializers import ModelSerializer


class CitySerializer(ModelSerializer):
    class Meta:
        model = City
        fields = ('id', 'name')

class WilayaSerializer(ModelSerializer):
    cities = CitySerializer(many=True, read_only=True,source='wilaya')
    class Meta:
        model = Wilaya
        fields = ('id', 'name', 'cities')



class AddressSerializer(ModelSerializer):
    city = CitySerializer(many=False, read_only=True)
    class Meta:
        model = Address
        fields = ('id','name','city') 

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username','first_name','last_name','email','phonenumber')

class AdvertSerializer(ModelSerializer):
    address = AddressSerializer(many=False, read_only=True)
    publisher = UserSerializer(many=False, read_only=True)
    class Meta:
        model = Advert
        fields = '__all__'



class FeedBackSerializer(ModelSerializer):
    class Meta:
        model = FeedBack
        fields = '__all__' 



#Wilaya,City,,FavoriteAdvert,AdvertImage,Chat,Message