from django.urls import path
from .views import (CustomerApiView, CustomerDetailApiView, AddressApiView)

urlpatterns = [
    path('customer', CustomerApiView.as_view()),
    path('customer/<int:id>/', CustomerDetailApiView.as_view()),
    path('address', AddressApiView.as_view()),
]
