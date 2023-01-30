from rest_framework.response import Response
from api.serializers import UserSerializer,AdvertSerializer
from api.models import User,FavoriteAdvert,Advert
from rest_framework import status

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

def addFavorite(request,uk,ak):
    try :
        user = User.objects.get(id = uk)
        advert = Advert.objects.get(id = ak)
        if FavoriteAdvert.objects.filter(user = user, advert = advert).exists() :
            return Response({'status' : 'fail', 'message' : 'advert already saved'},status=status.HTTP_400_BAD_REQUEST)
        else :
            FavoriteAdvert.objects.create(user = user, advert = advert)
            return Response({'status' : 'success', 'message' : 'advert saved successfully'},status=status.HTTP_201_CREATED)
    except :
        return Response({'status' : 'fail', 'message' : 'something went wrong'},status=status.HTTP_400_BAD_REQUEST)

def deleteFavorite(request,uk,ak):
    try :
        user = User.objects.get(id = uk)
        advert = Advert.objects.get(id = ak)
        fav = FavoriteAdvert.objects.get(user = user, advert = advert) 
        if not fav :
            return Response({'status' : 'fail', 'message' : 'advert not in favorite'},status=status.HTTP_404_NOT_FOUND)
        else :
            fav.delete()
            return Response({'status' : 'success', 'message' : 'advert delete successfully from saved'})
    except :
        return Response({'status' : 'fail', 'message' : 'internal server error'},status=status.HTTP_500_INTERNAL_SERVER_ERROR)

def getPosted(request,pk):
    adverts = Advert.objects.filter(publisher = pk)
    serializer = AdvertSerializer(adverts, many=True)
    return Response(serializer.data)