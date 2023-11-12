from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
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