from django.urls import path
from . import views

urlpatterns = [
    path('',views.test, name="routes"),

    path('search/',views.searchAdvert, name="search-adverts"),

    path('adverts/',views.advertsView, name="adverts"),
    path('adverts/<str:pk>',views.advertView, name="advert"),
    
    path('wilayas/',views.wilayasView, name="wilayas"),
    path('wilayas/<str:pk>',views.wilayaView, name="wilaya"),

    path('cities/',views.citiesView, name="cities"),
    path('cities/<str:pk>',views.cityView, name="city"),

    path('addresses/',views.addressesView, name="addresses"),
    path('addresses/<str:pk>',views.addressView, name="address"),

    path('users/',views.usersView, name="users"),
    path('users/<str:pk>',views.userView, name="user"),

    path('favorites/<str:pk>',views.favoritesView, name="favorites"),
    path('favorites/<str:uk>/<str:ak>',views.favoriteView, name="favorite"),
    path('posted/<str:pk>',views.postedView, name="posted"),

    path('scrap-apprentus/',views.scrapSiteA, name="scrapA"),
    path('scrap-profparticulier/',views.scrapSiteB, name="scrapB"),

    path('chats/<str:pk>',views.userChatsView, name="user-chats"),
    path('chat/<str:pk>',views.chatView, name="user-chat"),

#don't touch this !
    path('insert-db/',views.insertDB, name="insert-db"),
]



