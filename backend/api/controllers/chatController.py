from rest_framework.response import Response
from rest_framework import status
from api.serializers import UserSerializer,ChatSerializer,MessageSerializer
from api.models import User,Chat,Message,Advert
from django.db.models import Q

def getUserChats(request,pk):
    
    user = User.objects.get(id=pk)
    if user :
        chats = Chat.objects.filter(Q(teacher = user) | Q(student = user))
        if len(chats)==0 :
            return Response({'message' : 'empty'})
        else :
            serializer = ChatSerializer(chats, many=True)
            return Response(serializer.data)
    return Response({'message' : 'empty'})

def getChat(request,pk):
    
    chat = Chat.objects.get(id = pk)
    if chat :
        messages = Message.objects.filter(chat = chat)
        if len(messages)==0 :
            return Response({'message' : 'empty'})
        else :
            serializer = MessageSerializer(messages, many=True)
            return Response(serializer.data)
    return Response({'message' : 'empty'})   

def createChat(request,pk):
    try:
        user = User.objects.get(id=pk)
        data = request.data
        advert = Advert.objects.get(id = data['advert'])
        teacher = advert.publisher
        if Chat.objects.filter(teacher = teacher, student = user, advert = advert).exists():
            return Response({'status' : 'fail','message' : 'chat exists'},status=status.HTTP_400_BAD_REQUEST) 
        else :
            chat = Chat.objects.create(
                teacher = teacher,
                student = user,
                advert = advert
            )
            return Response({'status' : 'success','message' : 'chat created', 'chatID' : chat.id},status=status.HTTP_201_CREATED) 
    except Exception as e:
        return Response({'status' : 'fail','message' : e.__str__()},status=status.HTTP_400_BAD_REQUEST)  

def deleteChat(request,pk):
    try:
        chat = Chat.objects.get(id=pk)
        chat.delete()
        return Response({'status' : 'success','message' : 'chat deleted' }) 
    except Exception as e:
        return Response({'status' : 'fail','message' : e.__str__()})  


"""
{
    "sender" : 1,
    "text" : "bla bla"
}
"""
def addMessage(request,pk):
    try:
        data = request.data
        sender = User.objects.get(id=data['sender'])
        text = data['text']
        
        chat = Chat.objects.get(id = pk)

        message = Message.objects.create(
            sender = sender,
            text = text,
            chat = chat
        )
        return Response({'status' : 'success','message' : 'message created'},status=status.HTTP_201_CREATED) 
    except Exception as e:
        return Response({'status' : 'fail','message' : e.__str__()},status=status.HTTP_500_INTERNAL_SERVER_ERROR)  
