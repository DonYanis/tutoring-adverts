from django.contrib import admin

from .models import *
# Register your models here.

admin.site.register(Advert)
admin.site.register(User)
admin.site.register(Wilaya)
admin.site.register(City)
admin.site.register(Address)
admin.site.register(FeedBack)
admin.site.register(FavoriteAdvert)
admin.site.register(AdvertImage)
