from rest_framework.response import Response
from api.serializers import AdvertSerializer
from api.models import Advert,Address,City,User


"""
{
    "title" : "title",
    "category" : "primaire",
    "theme" : "math",
    "type" : "offline",
    "description" : "bla bla",
    "tarif" : 1000,
    "user" : "2",
    "address-name" : "test",
    "city" : "Amizour"
}
"""

def getAllAdds(request):
    adverts = Advert.objects.all().order_by('-updated')
    serializer = AdvertSerializer(adverts, many=True)
    return Response(serializer.data)

def getAdd(request,pk):
    advert = Advert.objects.get(id=pk)
    serializer = AdvertSerializer(advert, many=False)
    return Response(serializer.data)

def createAdd(request):
    try :
        data  = request.data
        city = City.objects.get(name = data['city'])
        address = Address.objects.create(name = data['address-name'],city = city)
        publisher = User.objects.get(id = data['user'])
        advert = Advert.objects.create(
            title = data['title'],
            category = data['category'],
            theme = data['theme'],
            type = data['type'],
            description = data['description'],
            tarif = data['tarif'],
            address = address,
            publisher = publisher
        )
    except:
        return Response({'status' : 'fail','message' : 'error when creating advert'})
    
    return Response({'status' : 'success','message' : 'created advert successfully'})

def updateAdd(request,pk):
    try :
        data  = request.data
        
        advert = Advert.objects.get(id = pk)
        if advert is not None:
            city = City.objects.get(name = data['city'])
            if not Address.objects.filter(name = data['address-name'],city = city).exists() :
                advert.address = Address.objects.create(name = data['address-name'],city = city)
            advert.category = data['category']
            advert.title = data['title']
            advert.theme = data['theme']
            advert.type = data['type']
            advert.description = data['description']
            advert.tarif = int(data['tarif'])
            print(data['category'])
            print(advert.category)
            advert.save()
        
    except Exception as e:
        print(e)
        return Response({'status' : 'fail','message' : e.__str__() + '\n error when updating advert'})
    
    return Response({'status' : 'success','message' : 'updated advert successfully'})

def deleteAdd(request,pk):
    try :
        advert = Advert.objects.get(id = pk)
        advert.delete()
        
    except Exception as e:
        return Response({'status' : 'fail','message' : e.__str__() + '\n error when updating advert'})
    
    return Response({'status' : 'success','message' : 'deleted advert successfully'})

