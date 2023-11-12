from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Customer
import braintree

gateway = braintree.BraintreeGateway (
    braintree.Configuration(
        braintree.Environment.Sandbox,
        merchant_id=settings.BT_MERCHANT_ID,
        public_key=settings.BT_PUBLIC_KEY,
        private_key=settings.BT_PRIVATE_KEY
    )
)

class GenerateTokenView(APIView):
    def get(self, request, format=None):
        try:
            client_token = gateway.client_token.generate()

            return Response(
                {'token': client_token},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            print(e)
            return Response(
                {'error': 'Something went wrong when retrieving braintree token'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class ProcessPaymentView(APIView):
    def post(self, request):
        try:
            data = request.data

            first_name = data['first_name']
            email = str(data['email'])
            email = email.lower()

            street_address = data['street_address']
            city = data['city']
            country = data['country']
            state_province = data['state_province']
            postal_zip_code = data['postal_zip_code']
            nonce = data['nonce']

            if country == 'mozambique':
                country_name = 'Mozambique'
                country_code = 'MZ'

            elif country == 'brazil':
                country_name = 'Brazil'
                country_code = 'BR'
            else:
                country_name = 'United States'
                country_code = 'US'

            total_amount = '47.99'

            if Customer.objects.filter(email=email).exists():
                customer = Customer.objects.get(email=email)
                customer_id = str (customer.customer_id)

                try:
                    gateway.customer.find(customer_id)
                except:
                    result = gateway.customer.create({
                        'first_name': first_name,
                        'email': email
                    })

                    if result.is_success:
                        customer_id = str(result.customer.id)

                        Customer.objects.filter(email=email).update(customer_id=customer_id)
                        customer = Customer.objects.get(email=email)
                    else:
                        return Response(
                            {'error': 'Customer information invalid'},
                            status=status.HTTP_400_BAD_REQUEST
                        )
            else:
                result = gateway.customer.create({
                    'first_name': first_name,
                    'email': email
                })

                if result.is_success:
                    customer_id = str(result.customer.id)

                    customer = Customer.objects.create(
                        first_name=first_name,
                        email=email,
                        customer_id=customer_id
                    )
                else:
                    return Response(
                        {'error': 'Failed to create customer'},
                        status=status.HTTP_400_BAD_REQUEST
                    )
            return Response(
                {'success': 'Created customer sucessfully'},
                status=status.HTTP_201_CREATED
            )

        except:
            return Response(
                {'error:' 'Something went wrong when processing payment'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR

            )