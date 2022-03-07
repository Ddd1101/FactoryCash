"""FactoryCash URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from Register import views as register_view


urlpatterns = [
    path('admin/', admin.site.urls),

    # 写入
    path('addItem/', register_view.addItem),
    # 删除
    path('delItem/', register_view.delItem),
    # 改

    # 查
    path('getItemsByNum/', register_view.getItemsByNum),
    path('getItems/',      register_view.getItems),
]
