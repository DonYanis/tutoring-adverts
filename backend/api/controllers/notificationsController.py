from rest_framework.response import Response
from rest_framework import status
from api.serializers import NotificationSerializer
from api.models import User,Notification

def addNotification(request,pk):
    try :
        id = request.data['id']
        user = User.objects.get(id = id)
        publisher = User.objects.get(id = pk)
        Notification.objects.create(
            user = publisher,
            text = f'{user.username} vous a contacté'
        )
        
        return Response({'status' : 'success'},status=status.HTTP_201_CREATED)
    except :
        return Response({'status' : 'fail'},status=status.HTTP_400_BAD_REQUEST)

def getNotifications(request,pk):
    try :
        user = User.objects.get(id = pk)
        notifications = Notification.objects.filter(user = user)

        serializer = NotificationSerializer(notifications, many=True)

        for notification in notifications :
            if not notification.seen :
                notification.seen = True
                notification.save()

        return Response(serializer.data)
    except Exception as e:
        return Response({'status' : 'fail' + e.__str__()},status=status.HTTP_400_BAD_REQUEST)

def getUnseen(request,pk):
    try :
        user = User.objects.get(id = pk)
        unseen = Notification.objects.filter(user = user,seen = False).exists()
        data = {"unseen" : unseen}
        return Response(data)
    except Exception as e:
        return Response({'status' : 'fail' + e.__str__()},status=status.HTTP_400_BAD_REQUEST)
