from rest_framework import serializers
from .models import Job

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ('name', 'address', 'date','time', 'service', 'cell', 'price', 'completed')
