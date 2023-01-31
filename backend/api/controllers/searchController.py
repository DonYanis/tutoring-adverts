from functools import reduce
import operator
from rest_framework.response import Response
from api.serializers import AdvertSerializer
from api.models import Advert,Address,City,User
from django.db.models import Q

"""
{
    "keyWords" : ['sport'],
    "theme" : "math",
    "category" : "primaire",
    "wilaya" : "Alger",
    "city" : "Alger",
    "type" : "offline",
    "tarifMin" : 500,
    "tarifMax" : 1000,
    "dateMin" : "2023-01-01",
    "dateMax" : "2023-01-22"
}
not specified args : exemple : 
    "type" : "",
"""

def searchAdds(request):

    data = request.data
    adverts = Advert.objects.all()
   
    key_words = data['keyWords']
    q_objects = [Q(title__icontains=word) | Q(description__icontains=word) for word in key_words]
   
    query = reduce(operator.or_, q_objects)
    adverts = adverts.filter(query)

    if len(data['theme'])>1 :
        adverts = adverts.filter(theme__iexact=data["theme"])
    if len(data['category'])>1 :
        adverts = adverts.filter(category__iexact=data["category"])
    if len(data['wilaya'])>1 :
        adverts = adverts.filter(address__city__wilaya__name__iexact=data['wilaya'])
    if len(data['city'])>1 :
        adverts = adverts.filter(address__city__name__iexact=data["city"])
    if len(data['type'])>1 :
        adverts = adverts.filter(type__iexact=data["type"])
    if data['tarifMax']>0 :
        adverts = adverts.filter(tarif__lte=data["tarifMax"])
    if len(data['dateMin'])>0 :
        adverts = adverts.filter(created__gte=data["dateMin"])
    if len(data['dateMax'])>0 :
        adverts = adverts.filter(created__lte=data["dateMax"])

    serializer = AdvertSerializer(adverts, many=True)
    return Response(serializer.data)

