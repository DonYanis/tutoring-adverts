from django.test import SimpleTestCase
from django.urls import reverse, resolve
from api.views import advertsView
from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from api.models import Address,Advert,City, User,Wilaya


class apiUrlsTests(SimpleTestCase):

    def test_get_adverts_is_resolved(self):
        url = reverse('adverts')
        self.assertEquals(resolve(url).func,advertsView)

#Create a valid and a non valid advert : POST to /api/adverts
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
        
        self.valid_advert = {
            'title': 'Test Advert',
            'category': 'primaire',
            'theme': 'Test Theme',
            'type': 'offline',
            'description': 'This is a test advert',
            'tarif': 100.0,
            'address-name': self.address.name,
            'city': self.city.name,
            'user': self.publisher.id,
        }

        self.invalid_advert = {
            'title': '',
            'category': '',
        }

    def tearDown(self):
        pass
    
    def test_create_valid_advert(self):

        response = self.client.post(
            reverse('adverts'),
            data=self.valid_advert
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Advert.objects.count(), 1)
        self.assertEqual(Advert.objects.get().title, 'Test Advert')

    def test_create_invalid_advert(self):
        response = self.client.post(
            reverse('adverts'),
            data=self.invalid_advert
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
