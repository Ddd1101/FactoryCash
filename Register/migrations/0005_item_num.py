# Generated by Django 3.2.8 on 2022-03-07 08:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Register', '0004_rename_print_item_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='num',
            field=models.IntegerField(default=0),
        ),
    ]