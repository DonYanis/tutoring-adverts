from django.urls import path
from . import views

urlpatterns = [
    path('',views.test, name="routes"),

    path('adverts/',views.advertsView, name="adverts"),
    path('adverts/<str:pk>',views.advertView, name="advert"),
    
    path('saved/',views.test, name="saved"),
    path('posted/',views.test, name="posted"),
    path('profile/<str:pk>',views.test, name="profile"),

    path('wilayas/',views.wilayasView, name="wilayas"),
    path('wilayas/<str:pk>',views.wilayaView, name="wilaya"),

    path('cities/',views.citiesView, name="cities"),
    path('cities/<str:pk>',views.cityView, name="city"),

    path('addresses/',views.addressesView, name="addresses"),
    path('addresses/<str:pk>',views.addressView, name="address"),

    path('users/',views.usersView, name="users"),
    path('users/<str:pk>',views.userView, name="user"),
]



