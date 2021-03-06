# Generated by Django 3.2.8 on 2022-03-07 08:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Register', '0002_item_productname'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='count',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='item',
            name='customer',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='item',
            name='print',
            field=models.FloatField(default=0),
        ),
        migrations.AddField(
            model_name='item',
            name='size',
            field=models.CharField(default='', max_length=255),
        ),
    ]
