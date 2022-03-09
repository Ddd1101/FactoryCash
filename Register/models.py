from django.db import models

# Create your models here.

class Item(models.Model):
    created     = models.DateTimeField(auto_now_add=True)
    num         = models.IntegerField(default=0)
    customer    = models.CharField(default="", max_length=255)
    productName = models.CharField(default="", max_length=255)
    size        = models.CharField(default="", max_length=255)
    count       = models.IntegerField(default=0)
    price       = models.FloatField(default=0)
