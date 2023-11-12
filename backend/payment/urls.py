from django.urls import path
from .views import GenerateTokenView

urlpatterns = [
    path('generate-token', GenerateTokenView.as_view()),
]
