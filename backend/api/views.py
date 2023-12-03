from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from payment.models import Customer, Address
from .serializers import CustomerSerializer, AddressSerializer



class CustomerApiView(APIView):
    def get(self, request, *args, **kwargs):
        '''
        Listar todos os usuarios
        '''
        customers = Customer.objects.all()
        serializer = CustomerSerializer(customers, many=True)
        
        return Response(serializer.data, status=status.HTTP_200_OK)

class AddressApiView(APIView):
    def get(self, request, *args, **kwargs):
        addresses = Address.objects.all()
        serializer = AddressSerializer(addresses, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


    