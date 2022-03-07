# -*- coding: utf-8 -*-
#coding=UTF-8

from django.db.models import Avg

from .models import *
from django.http.response import JsonResponse
import time
import json
from django.forms.models import model_to_dict

import datetime


def addItem(request):
    data = json.loads((request.body).decode("utf-8"))
    res = Item.objects.create(**data)

    return (res)

def getItem(request):
    data = json.loads((request.body).decode("utf-8"))

    res = list(Item.objects.filter(created__contains=datetime.date(2022, 3, 7), num = 1).values()) #根据日期包含查询