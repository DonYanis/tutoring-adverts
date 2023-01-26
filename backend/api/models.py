from django.db import models
from django.contrib.auth.models import AbstractUser
    
advert_types=('online','offline')

class User(AbstractUser):
    is_admin=models.BooleanField(default='False')

    email=models.EmailField(unique=True,null=True)
    phonenumber=models.CharField(max_length=20, null=True,blank=True)
    #avatar=models.ImageField(null=True,blank=True)
    #has_avatar=models.BooleanField(default='False')

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]

    def __str__(self) :
        return self.email


class Wilaya(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    def __str__(self) :
        return self.name

class City(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    wilaya = models.ForeignKey(Wilaya,on_delete=models.CASCADE)
    def __str__(self) :
        return self.name

class Address(models.Model):
    name = models.CharField(max_length=300, null=False, blank=False)
    city = models.ForeignKey(City,on_delete=models.CASCADE)
    def __str__(self) :
        return self.name

class Advert(models.Model):
    body = models.TextField(null=True,blank=True)
    address = models.ForeignKey(Address,on_delete=models.CASCADE)
    type=models.CharField(max_length=14,choices=advert_types,default='offline')

    publisher = models.ForeignKey(User,on_delete=models.CASCADE,null=False)

    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
            ordering=['-updated','-created']

    def __str__(self) :
        return self.body[0:50]

class FavoriteAdvert(models.Model):
    advert = models.ForeignKey(Advert,on_delete=models.CASCADE,null=False)
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=False)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
            ordering=['-created']

    def __str__(self) :
        return self.advert

class AdvertImage(models.Model):
    image=models.ImageField(null=True,default="default.svg")
    advert=models.ForeignKey(Advert,on_delete=models.SET_NULL,null=True)

class FeedBack(models.Model):
    rate=models.IntegerField(default=0)
    body=models.TextField(max_length=200)
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    is_accepted=models.BooleanField(default='False')

    created=models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering=['-rate']

    def __str__(self):
        return self.body
