from . import views
from django.urls import path


urlpatterns = [
    path('',views.Resume.as_view(),name='resume')
]