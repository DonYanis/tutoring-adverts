import zipfile
from io import BytesIO
from django.http import FileResponse
from api.models import Advert,AdvertImage,User,UserImage
from rest_framework.response import Response
from rest_framework import status

def advertImageList(request,pk):
    try:
        advert = Advert.objects.get(id = pk)
        imgs = AdvertImage.objects.filter(advert=advert)
        images = []
        for image in imgs :
            images.append(image.image)
        in_memory = BytesIO()
        with zipfile.ZipFile(in_memory, "a") as zip:
            for i, image in enumerate(images):
                zip.write(image.path, f"image_{i}.jpeg")

        in_memory.seek(0)
        response = FileResponse(in_memory, content_type='application/zip')
        response['Content-Disposition'] = 'attachment; filename="images.zip"'
        return response
    except :
        return Response({'status' : 'fail'}, status = status.HTTP_500_INTERNAL_SERVER_ERROR)


def mainAdvertImage(request,pk):
    try:
        advert = Advert.objects.get(id = pk)
        image = AdvertImage.objects.filter(advert=advert).first().image

        return FileResponse(open(image.path, 'rb'), content_type='image/jpeg')
    except :
        return Response({'status' : 'fail'}, status = status.HTTP_500_INTERNAL_SERVER_ERROR)

def getUserImage(request,pk):
    try:
        user = User.objects.get(id = pk)
        image = UserImage.objects.filter(user=user).first().image

        return FileResponse(open(image.path, 'rb'), content_type='image/jpeg')
    except :
        return Response({'status' : 'fail'}, status = status.HTTP_500_INTERNAL_SERVER_ERROR)

def addUserImage(request,pk):
    try:
        user = User.objects.get(id = pk)
        image = request.FILES.get('image')
        UserImage.objects.create(user = user, image = image)
        return Response({'status' : 'success'}, status = status.HTTP_201_CREATED)
    except :
        return Response({'status' : 'fail'}, status = status.HTTP_500_INTERNAL_SERVER_ERROR)

def uploadAdvertImages(request,pk):
    try :
        advert = Advert.objects.get(id = pk)
        image_files = request.FILES.getlist('images')
        images = []
        for image_file in image_files:
            AdvertImage.objects.create(image=image_file, advert = advert)
        return Response({'status': 'success'})
    except :
        return Response({'status' : 'fail'}, status = status.HTTP_500_INTERNAL_SERVER_ERROR)
