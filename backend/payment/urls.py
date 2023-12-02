from django.urls import path
from .views import GenerateTokenView, ProcessPaymentView, getCustomer, getAddress

urlpatterns = [
    path('generate-token', GenerateTokenView.as_view()),
    path('process-payment', ProcessPaymentView.as_view()),
    path('api/get-customer', getCustomer, name='get_customer'),
    path('api/get-address', getAddress, name='get_address')
]
