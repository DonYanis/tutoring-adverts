from rest_framework.response import Response
from api.serializers import AddressSerializer
from api.models import Advert


def getAllAdds(request):
    adverts = Advert.objects.all().order_by('-updated')
    serializer = AddressSerializer(adverts, many=True)
    return Response(serializer.data)

def getAdd(request,pk):
    advert = Advert.objects.get(id=pk)
    serializer = AddressSerializer(advert, many=False)
    return Response(serializer.data)