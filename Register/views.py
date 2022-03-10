from django.shortcuts import render

# Create your views here.


# coding='utf-8'
from django.http import JsonResponse
from django.views.decorators.http import require_GET, require_POST, require_http_methods
from . import db_handler

from .models import *

@require_POST
def addItem(request):
    res = db_handler.addItem(request)
    return JsonResponse(200, safe=False)

@require_POST
def addData(request):
    res = db_handler.addData(request)
    return JsonResponse(200, safe=False)

@require_POST
def delItem(request):
    res = db_handler.delItem(request)
    return JsonResponse(200, safe=False)

@require_POST
def getItemsByNum(request):
    res = db_handler.getItemsByNum(request)
    return JsonResponse(200, safe=False)

@require_POST
def getItems(request):
    res = db_handler.getItems(request)
    return JsonResponse(200, safe=False)