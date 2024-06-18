from django.db import models
from datetime import date
import datetime
class Job(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=200)
    date = models.DateField()
    time = models.TimeField(default = datetime.datetime.now().time())
    service = models.TextField()
    cell = models.CharField(max_length=10)
    price = models.PositiveIntegerField(default=0)
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.name