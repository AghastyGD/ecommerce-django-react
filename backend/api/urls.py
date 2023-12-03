from django.urls import path
from .views import (CustomerApiView, AddressApiView)

urlpatterns = [
    path('customer', CustomerApiView.as_view()),
    path('address', AddressApiView.as_view())
]
