from .models import Advert,User,Address,City,Wilaya,Chat,Message,Notification,AdvertImage
from rest_framework.serializers import ModelSerializer,ImageField

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
    address = AddressSerializer(many=False, read_only=True)
    class Meta:
        model = User
        fields = ('id', 'username','first_name','last_name','email','phonenumber','address')

class AdvertSerializer(ModelSerializer):
    address = AddressSerializer(many=False, read_only=True)
    publisher = UserSerializer(many=False, read_only=True)
    class Meta:
        model = Advert
        fields = '__all__'

class ChatSerializer(ModelSerializer):
    teacher = UserSerializer(many=False, read_only=True)
    student = UserSerializer(many=False, read_only=True)
    advert = AdvertSerializer(many=False,read_only=True)
    class Meta:
        model = Chat
        fields = ['id','teacher','student','advert'] 

class MessageSerializer(ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__' 

class NotificationSerializer(ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__' 

class AdvertImageSerializer(ModelSerializer):
    image = ImageField(use_url=True)
    class Meta:
        model = AdvertImage
        fields = '__all__' 