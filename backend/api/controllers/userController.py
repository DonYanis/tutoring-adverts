from rest_framework.response import Response
from api.serializers import UserSerializer,AdvertSerializer
from api.models import User,FavoriteAdvert,Advert


def getAllUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

def getUser(request,pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

def getFavorites(request,pk):
    favs = FavoriteAdvert.objects.filter(user = pk)
    adverts = Advert.objects.filter(id__in = favs)
    serializer = AdvertSerializer(adverts, many=True)
    return Response(serializer.data)

def getPosted(request,pk):
    adverts = Advert.objects.filter(publisher = pk)
    serializer = AdvertSerializer(adverts, many=True)
    return Response(serializer.data)