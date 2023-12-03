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

class CustomerDetailApiView(APIView):
    def get_object(self, id):

        try:
            return Customer.objects.get(id=id)
            
        except Customer.DoesNotExist:
            return None

    def get(self, request, id, *args, **kwargs):
        customer_instance = self.get_object(id)
        if not customer_instance:
            return Response(
                {"res": "Object with id does not exisxts"},
                status = status.HTTP_400_BAD_REQUEST
            )

        serializer = CustomerSerializer(customer_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AddressApiView(APIView):
    '''
    Listar os enderecos
    '''
    def get(self, request, *args, **kwargs):
        addresses = Address.objects.all()
        serializer = AddressSerializer(addresses, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


    