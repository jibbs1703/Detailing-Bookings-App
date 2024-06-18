from django.contrib import admin
from .models import Job

class JobAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'date','time', 'service', 'cell', 'price', 'completed')

admin.site.register(Job, JobAdmin)
