from rest_framework.response import Response
from rest_framework import status
from api.serializers import AdvertSerializer
from api.models import Advert,Address,City,User,Wilaya,AdvertImage


"""
{
    "title" : "title",
    "category" : "primaire",
    "theme" : "math",
    "type" : "offline",
    "description" : "bla bla",
    "tarif" : 1000,
    "user" : "2",
    "addressName" : "test",
    "city" : "Amizour"
}
"""
def getHomeAdds(request):
    try:
        pri_adverts = AdvertSerializer(Advert.objects.filter(category = 'primaire'),many=True)
        col_adverts = AdvertSerializer(Advert.objects.filter(category = 'collège'),many=True)
        lyc_adverts = AdvertSerializer(Advert.objects.filter(category = 'lycée'),many=True)

        data = {
            "primaire" : pri_adverts.data,
            "college" : col_adverts.data,
            "lycee" : lyc_adverts.data
        }
        return Response(data)
    except Exception as e:
        return Response({"status" : "fail", "message" : e.__str__()},status = status.HTTP_500_INTERNAL_SERVER_ERROR)


def getAllAdds(request):
    adverts = Advert.objects.all().order_by('-updated')
    serializer = AdvertSerializer(adverts, many=True)
    return Response(serializer.data)

def getAdd(request,pk):
    advert = Advert.objects.get(id=pk)
    serializer = AdvertSerializer(advert, many=False)
    data = serializer.data
    data['wilaya'] = advert.address.city.wilaya.name
    return Response(data)

def createAdd(request):
    try :
        print( request.data)
        data  = request.data
        
        city = City.objects.get(id = data['city'])
        address = Address.objects.create(name = data['addressName'],city = city)
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
        #image_files=data["images"]
        #image_files = request.FILES.getlist('images')
        #print(data["images"])
        #for image_file in image_files:
            #AdvertImage.objects.create(image=image_file, advert = advert)
    except:
        return Response({'status' : 'fail','message' : 'error when creating advert'},status=status.HTTP_400_BAD_REQUEST)
    
    return Response({'status' : 'success','message' : 'created advert successfully'},status=status.HTTP_201_CREATED)

def updateAdd(request,pk):
    try :
        data  = request.data
        
        advert = Advert.objects.get(id = pk)
        if advert is not None:
            city = City.objects.get(name = data['city'])
            if not Address.objects.filter(name = data['addressName'],city = city).exists() :
                advert.address = Address.objects.create(name = data['addressName'],city = city)
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
        return Response({'status' : 'fail','message' : e.__str__() + '\n error when updating advert'},status=status.HTTP_400_BAD_REQUEST)
    
    return Response({'status' : 'success','message' : 'updated advert successfully'})

def deleteAdd(request,pk):
    try :
        advert = Advert.objects.get(id = pk)
        advert.delete()
        
    except Exception as e:
        return Response({'status' : 'fail','message' : e.__str__() + '\n error when updating advert'})
    
    return Response({'status' : 'success','message' : 'deleted advert successfully'})

