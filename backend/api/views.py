from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Advert
from .controllers.advertController import *

@api_view(['GET'])
def test(request):
    advert = Advert.objects.all()
    routes = {'message': advert[0].id, 'body' : advert[0].body }
    return Response(routes)

@api_view(['GET','POST'])
def AdvertsView(request):

    if request.method == 'GET':
        return getAllAdds(request)

    #elif request.method == 'PUT':
        #return utils.updateNote(request, pk)

    #elif request.method == 'DELETE':
        #return utils.deleteNote(request, pk)
"""
@api_view(['GET','PUT','DELETE'])
def AdvertView(request,pk):

    if request.method == 'GET':
        #return utils.getNote(request, pk)

    #elif request.method == 'PUT':
        #return utils.updateNote(request, pk)

    #elif request.method == 'DELETE':
        #return utils.deleteNote(request, pk)"""
