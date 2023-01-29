from django.db import models
from django.contrib.auth.models import AbstractUser
    
advert_types=(('online','Online'),('offline','Offline'))
advert_categories = (('primaire','Primaire'),('collège','Collège'),('lycée','Lyceé'))


class Wilaya(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    def __str__(self) :
        return self.name

class City(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    wilaya = models.ForeignKey(Wilaya,on_delete=models.CASCADE,related_name='wilaya')
    def __str__(self) :
        return self.name

class Address(models.Model):
    name = models.CharField(max_length=300, null=False, blank=False)
    city = models.ForeignKey(City,on_delete=models.CASCADE,related_name='city')
    def __str__(self) :
        return self.name

class User(AbstractUser):
    is_admin=models.BooleanField(default='False')

    email=models.EmailField(unique=True,null=True)
    phonenumber=models.CharField(max_length=20, null=True,blank=True)
    address = models.ForeignKey(Address, on_delete=models.SET_NULL, related_name='useraddress', null=True, blank=True)
    #avatar=models.ImageField(null=True,blank=True)
    #has_avatar=models.BooleanField(default='False')

    #USERNAME_FIELD='email'

    def __str__(self) :
        return str(self.id)

class Advert(models.Model):

    title = models.CharField(max_length=60,null=True,blank=True)

    category = models.CharField(max_length=14,choices=advert_categories,default='primaire')
    theme = models.CharField(max_length=50,null=False,blank=False)
    type=models.CharField(max_length=14,choices=advert_types,default='offline')

    description = models.TextField(max_length=400, null=True,blank=True)

    tarif = models.FloatField()
    address = models.ForeignKey(Address,on_delete=models.CASCADE,related_name='address')
    

    publisher = models.ForeignKey(User,on_delete=models.CASCADE,null=False,related_name='publisher')

    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
            ordering=['-updated','-created']

    def __str__(self) :
        return self.title

class FavoriteAdvert(models.Model):
    advert = models.ForeignKey(Advert,on_delete=models.CASCADE,null=False)
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=False)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
            ordering=['-created']

    def __str__(self) :
        return str(self.id)

class AdvertImage(models.Model):
    image=models.ImageField(null=True,upload_to="images/")
    advert=models.ForeignKey(Advert,on_delete=models.SET_NULL,null=True)

class UserImage(models.Model):
    image=models.ImageField(null=True,upload_to="images/")
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    created = models.DateTimeField(auto_now_add=True)
    class Meta:
            ordering=['-created']

class Chat(models.Model):
    teacher = models.ForeignKey(User,on_delete=models.CASCADE,null=True,related_name='teacher')
    student = models.ForeignKey(User,on_delete=models.CASCADE,null=True,related_name='student')
    advert = models.ForeignKey(Advert,on_delete=models.CASCADE,null=True,related_name='course')
    created=models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering=['-created']

    def __str__(self) :
        return self.advert.title

class Message(models.Model):
    sender = models.ForeignKey(User,on_delete=models.CASCADE,null=False)
    chat = models.ForeignKey(Chat,on_delete=models.CASCADE,null=False)
    text = models.CharField(max_length=200,blank=False)
    created=models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering=['-created']
    
    def __str__(self) :
        return self.sender.username

class Notification(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=False,related_name='notifuser')
    text = models.CharField(max_length=200,blank=False)
    seen = models.BooleanField(default=False)
    created=models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering=['-created']
    
    def __str__(self) :
        return self.sender.username