from api.models import Wilaya,City
from .data import map

def insertMap():
    wilayas = map['wilayas']
    cities = map['communes']

    for wilaya in wilayas:
        temp = Wilaya.objects.create(
            id = int(wilaya['id']),
            name = wilaya['name']
        )

    for city in cities :
        wilaya = Wilaya.objects.get(id=int(city['wilaya']) )
        temp = City.objects.create(
            id = int(city['zip']),
            name = city['name'],
            wilaya =  wilaya 
        )
