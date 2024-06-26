from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import JobSerializer
from .models import Job

def home(request):
    return HttpResponse("<h1>This is the Home Page for a Local Car Detailing Business</h1>")

def about(request):
    return HttpResponse("<h1>This is the About Page for a Local Car Detailing Business</h1>")

def contact(request):
    return HttpResponse("<h1>This is the Contact Page for a Local Car Detailing Business</h1>")

class JobView(viewsets.ModelViewSet):
    serializer_class = JobSerializer
    queryset = Job.objects.all()