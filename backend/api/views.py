from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import  parser_classes
from rest_framework.parsers import MultiPartParser
from api.models import Advert,User
from rest_framework import status
from .controllers.advertController import getAdd,getAllAdds,getHomeAdds,createAdd,updateAdd,deleteAdd
from .controllers.addressController import getAddress,getAllAddress,getAllCities,getAllWilayas,getCity,getWilaya,addAddress
from .controllers.userController import getAllUsers,getFavorites,getPosted,getUser,addFavorite,deleteFavorite
from .controllers.scrap_apprentus_controller import scrapSiteOne
from .controllers.scrap_profparticulier_controller import scrapSiteTwo
from .controllers.chatController import createChat,getChat,getUserChats,addMessage,deleteChat
from .controllers.notificationsController import addNotification,getNotifications,getUnseen
from .database.insertion import insertMap 
from .controllers.searchController import searchAdds
from .controllers.imageController import addUserImage,advertImageList,getUserImage,mainAdvertImage,uploadAdvertImages

@api_view(['POST'])
def searchAdvert(request):

    if request.method == 'POST':
        return searchAdds(request)

@api_view(['POST'])
def insertDB(request):
    if request.method == 'POST' and request.data['code']=='secret':
        insertMap()
        return Response({'message' : 'success'})
    else :
        return Response({'message' : 'failed'})

@api_view(['GET'])
def scrapSiteA(request):
    try :
        data = scrapSiteOne()
        return Response(data)
    except :
        return Response({"status" : "fail"},status = status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def scrapSiteB(request):
    try :
        data = scrapSiteTwo()
        return Response(data)
    except :
        return Response({"status" : "fail"},status = status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def homeView(request):
    if request.method == 'GET':
        return getHomeAdds(request)

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
    if request.method == 'POST':
        return addAddress(request)

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

@api_view(['GET','POST'])
def userChatsView(request,pk):

    if request.method == 'GET':
        return getUserChats(request,pk)
    
    if request.method == 'POST':
        return createChat(request,pk)

@api_view(['GET','POST','DELETE'])
def chatView(request,pk):

    if request.method == 'GET':
        return getChat(request,pk)

    elif request.method == 'DELETE':
        return deleteChat(request,pk)
    
    elif request.method == 'POST':
        return addMessage(request,pk)


@api_view(['GET','POST'])
def notificationsView(request,pk):

    if request.method == 'GET':
        return getNotifications(request,pk)
    
    elif request.method == 'POST':
        return addNotification(request,pk)

@api_view(['GET'])
def unseenNotificationsView(request,pk):

    if request.method == 'GET':
        return getUnseen(request,pk)



@api_view(['GET','POST'])
@parser_classes([MultiPartParser])
def advertImageView(request,pk):
    if request.method == 'GET' :
        return advertImageList(request,pk)
    elif request.method == 'POST' :
        return uploadAdvertImages(request,pk)

@api_view(['GET'])
def mainImageView(request,pk):
    if request.method == 'GET' :
        return mainAdvertImage(request,pk)

@api_view(['GET','POST'])
def userImageView(request,pk):
    if request.method == 'GET' :
        return getUserImage(request,pk)
    elif request.method == 'POST' :
        return addUserImage(request,pk)

from django.contrib.auth.decorators import login_required
from django.shortcuts import render,redirect

@login_required(login_url='login')
def userLogin(request):
    user = User.objects.get(id = request.user.id)
    if user.address:
        link = f'http://127.0.0.1:3000/home/{request.user.id}'
        context={'link':link}
        return render(request,'login.html',context)
    else:
        link = f'http://127.0.0.1:3000/register/{request.user.id}'
        context={'link':link}
        return render(request,'register.html',context)
    

@api_view(['GET'])
def stats(request):
    context={'users-count':User.objects.count(),'adverts-count':Advert.objects.count()}
    return Response(context)