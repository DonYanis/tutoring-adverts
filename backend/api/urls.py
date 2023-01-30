from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('home/',views.homeView, name="home"),

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

    path('notifications/<str:pk>',views.notificationsView, name="notifications"),
    path('notifications-unseen/<str:pk>',views.unseenNotificationsView, name="notifications-unseen"),

    path('images/<str:pk>', views.advertImageView, name='image-list'),
    path('main-image/<str:pk>', views.mainImageView, name='main-image'),
    path('user-image/<str:pk>', views.userImageView, name='user-image'),

    path('login/', views.userLogin, name='login'),
    path('register/', views.userRegister, name='register'),

    path('statistics/', views.stats, name='statistics'),

#don't touch this !
    path('insert-db/',views.insertDB, name="insert-db"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)



