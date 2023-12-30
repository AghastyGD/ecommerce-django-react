from django.test import TestCase
from ..models import Customer, Address, PaymentMethod, Order
from django.contrib.auth.models import User

class ExampleTest(TestCase):
    def test_um_e_dois(self):
        self.assertEqual(1,2)

class CustomerTest(TestCase):
    def test_customer_creation(self):
        customer = Customer.objects.create(
            first_name = 'Joao',
            email = 'joao@gmail.com',
            customer_id = 1
        )

        self.assertEqual(str(customer), 'Joao: 1')

#class AddressTest(TestCase):
 #   def setUp(self):
  #      # Create a customer and fill the address
   #     self.user 
    #    address = Address.objects.create()

        