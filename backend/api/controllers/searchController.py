from functools import reduce
import operator
from rest_framework.response import Response
from api.serializers import AdvertSerializer
from api.models import Advert,Address,City,User
from django.db.models import Q

"""
{
    "key-words" : ['sport'],
    "theme" : "math",
    "category" : "primaire",
    "wilaya" : "Alger",
    "city" : "Alger",
    "type" : "offline",
    "tarif-min" : 500,
    "tarif-max" : 1000,
    "date-min" : "2023-01-01",
    "date-max" : "2023-01-22"
}
not specified args : exemple : 
    "type" : "",
"""

def searchAdds(request):

    data = request.data
    adverts = Advert.objects.all()
   
    key_words = data['key-words']
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
    if data['tarif-min']>0 :
        adverts = adverts.filter(tarif__gte=data["tarif-min"])
    if data['tarif-max']>0 :
        adverts = adverts.filter(tarif__lte=data["tarif-max"])
    if len(data['date-min'])>0 :
        adverts = adverts.filter(created__gte=data["date-min"])
    if len(data['date-max'])>0 :
        adverts = adverts.filter(created__lte=data["date-max"])

    serializer = AdvertSerializer(adverts, many=True)
    return Response(serializer.data)

