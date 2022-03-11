# -*- coding: utf-8 -*-
#coding=UTF-8

from django.db.models import Avg

from .models import *
from django.http.response import JsonResponse
import time
import json
from django.forms.models import model_to_dict

import datetime

# 增
def addItem(request):
    data = json.loads((request.body).decode("utf-8"))
    print(data)
    # res = Item.objects.create(**data)

    return (data)

def addData(request):
    data = json.loads((request.body).decode("utf-8"))
    res = Item.objects.create(**data)
    res = {};

    return (res)

# 删
def delItem(request):
    data = json.loads((request.body).decode("utf-8"))
    res = Item.objects.filter(created__contains=datetime.date(data['year'], data['month'], data['day']), customer = data['customer'], num = data['num']).delete()
    return res

# 改
def updateItem(request):
    data = json.loads((request.body).decode("utf-8"))
    res = Item.objects.filter(created__contains=datetime.date(data['year'], data['month'], data['day']), customer = data['customer'], num = data['num'], ).update()
    return res

# 查
def getItemsByNum(request):
    data = json.loads((request.body).decode("utf-8"))

    res = list(Item.objects.filter(created__contains=datetime.date(data['year'], data['month'], data['day']), customer = data['customer'], num = data['num']).values()) #根据日期包含查询

def getItems(request):
    data = json.loads((request.body).decode("utf-8"))

    res = list(Item.objects.filter(created__contains=datetime.date(data['year'], data['month'], data['day']), customer = data['customer']).values()) #根据日期包含查询