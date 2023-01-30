from django.urls import reverse
from api.views import advertsView
from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from api.models import Address,Advert,City, User,Wilaya



#Create a chat and send a message
class AdvertAPIViewTests(APITestCase):

    def setUp(self):
        self.client = APIClient()
        self.client.login(username = 'admin', password = 'admin')

        self.wilaya = Wilaya.objects.create(name = 'Bejaia')
        self.city = City.objects.create(name = 'Amizour', wilaya = self.wilaya)
        self.address = Address.objects.create(
            name='123 Main St',
            city=self.city
        )
        self.publisher = User.objects.create(username = 'admin', password = 'admin',address = self.address)
        self.student = User.objects.create(username = 'user', password = 'user',address = self.address)

        self.advert = Advert.objects.create(
            title =  'Test Advert',
            category = 'primaire',
            theme = 'Test Theme',
            type = 'offline',
            description = 'This is a test advert',
            tarif = 100.0,
            address = self.address,
            publisher = self.publisher,
        )



    def tearDown(self):
        pass
    
    def test_create_valid_chat(self):

        response = self.client.post(
            reverse('user-chats',kwargs= {'pk':self.student.id}),
            data={'advert' : self.advert.id}
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_invalid_chat(self):
        response = self.client.post(
            reverse('user-chats',kwargs= {'pk':-1}),
            data={'advert' : ''}
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
