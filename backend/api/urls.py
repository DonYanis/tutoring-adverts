from django.urls import path
from . import views

urlpatterns = [
    path('',views.test, name="routes"),
    path('adverts/',views.test, name="adverts"),
    path('advert/<str:pk>',views.test, name="advert"),
    path('saved/',views.test, name="saved"),
    path('posted/',views.test, name="posted"),
    path('profile/<str:pk>',views.test, name="profile")
]



