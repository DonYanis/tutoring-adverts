from rest_framework.response import Response
from api.serializers import WilayaSerializer,CitySerializer,AddressSerializer
from api.models import Wilaya,City,Address


def getAllWilayas(request):
    wilayas = Wilaya.objects.all().order_by('id')
    serializer = WilayaSerializer(wilayas, many=True)
    return Response(serializer.data)

def getWilaya(request,pk):
    wilaya = Wilaya.objects.get(id=pk)
    serializer = WilayaSerializer(wilaya, many=False)
    return Response(serializer.data)
     
def getAllCities(request):
    cities = City.objects.all()
    serializer = CitySerializer(cities, many=True)
    return Response(serializer.data)

def getCity(request,pk):
    city = City.objects.get(id=pk)
    serializer = CitySerializer(city, many=False)
    return Response(serializer.data)

def getAllAddress(request):
    addresses = Address.objects.all().order_by('id')
    serializer = AddressSerializer(addresses, many=True)

    for data in serializer.data : 
        city = City.objects.select_related('wilaya').get(id=data['city']['id'])
        wilaya = {'wilaya' : city.wilaya.name }
        data.update(wilaya)
    
    return Response(serializer.data)

def getAddress(request,pk):
    address = Address.objects.get(id=pk)
    serializer = AddressSerializer(address, many=False)

    city = City.objects.select_related('wilaya').get(id=serializer.data['city']['id'])
    wilaya = {'wilaya' : city.wilaya.name }
    data = serializer.data
    data.update(wilaya)
    return Response( data)