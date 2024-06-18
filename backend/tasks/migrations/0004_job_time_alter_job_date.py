# Generated by Django 5.0.6 on 2024-06-18 15:34

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0003_job_date_job_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='time',
            field=models.TimeField(default=datetime.time(11, 34, 57, 353177)),
        ),
        migrations.AlterField(
            model_name='job',
            name='date',
            field=models.DateField(default=datetime.date.today),
        ),
    ]
