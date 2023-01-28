from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Advert
from .controllers.advertController import *
from .controllers.addressController import *
from .controllers.userController import *
from .controllers.scrap_apprentus_controller import scrapSiteOne
from .controllers.scrap_profparticulier_controller import scrapSiteTwo
from .database.insertion import insertMap 


@api_view(['POST'])
def insertDB(request):
    if request.method == 'POST' and request.data['code']=='secret':
        insertMap()
        return Response({'message' : 'success'})
    else :
        return Response({'message' : 'failed'})

@api_view(['GET'])
def scrapSiteA(request):
    data = scrapSiteOne()
    return Response(data)

@api_view(['GET'])
def scrapSiteB(request):
    data = scrapSiteTwo()
    return Response(data)

@api_view(['GET'])
def test(request):
    adverts = Advert.objects.all()
    routes = {'number of adverts': len(adverts) }
    return Response(routes)

@api_view(['GET','POST'])
def advertsView(request):

    if request.method == 'GET':
        return getAllAdds(request)

    elif request.method == 'POST':
        return createAdd(request)


@api_view(['GET','PUT','DELETE'])
def advertView(request,pk):

    if request.method == 'GET':
        return getAdd(request, pk)

    elif request.method == 'PUT':
        return updateAdd(request, pk)

    elif request.method == 'DELETE':
        return deleteAdd(request, pk)

@api_view(['GET'])
def wilayasView(request):

    if request.method == 'GET':
        return getAllWilayas(request)

@api_view(['GET'])
def wilayaView(request,pk):

    if request.method == 'GET':
        return getWilaya(request,pk)


@api_view(['GET'])
def citiesView(request):

    if request.method == 'GET':
        return getAllCities(request)


@api_view(['GET'])
def cityView(request,pk):

    if request.method == 'GET':
        return getCity(request,pk)

@api_view(['GET','POST'])
def addressesView(request):

    if request.method == 'GET':
        return getAllAddress(request)


@api_view(['GET','PUT','DELETE'])
def addressView(request,pk):

    if request.method == 'GET':
        return getAddress(request,pk)

@api_view(['GET','POST'])
def usersView(request):

    if request.method == 'GET':
        return getAllUsers(request)


@api_view(['GET','PUT','DELETE'])
def userView(request,pk):

    if request.method == 'GET':
        return getUser(request,pk)

@api_view(['GET'])
def favoritesView(request,pk):

    if request.method == 'GET':
        return getFavorites(request,pk)

@api_view(['POST','DELETE'])
def favoriteView(request,uk,ak):

    if request.method == 'POST':
        return addFavorite(request,uk,ak)
    elif request.method == 'DELETE':
        return deleteFavorite(request,uk,ak)

@api_view(['GET','POST','DELETE'])
def postedView(request,pk):

    if request.method == 'GET':
        return getPosted(request,pk)