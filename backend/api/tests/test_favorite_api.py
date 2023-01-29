from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from api.models import Address,Advert,City, User,Wilaya


#save an advert
class FavoriteAPIViewTests(APITestCase):

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
    
    def test_save_valid_advert(self):

        response = self.client.post(
            reverse('favorite',kwargs={'uk': self.publisher.id, 'ak':self.advert.id})
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_save_invalid_advert(self):
        response = self.client.post(
            reverse('favorite',kwargs={'uk': -1, 'ak':200})
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
