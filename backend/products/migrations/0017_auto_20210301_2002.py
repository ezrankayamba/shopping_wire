# Generated by Django 3.1.4 on 2021-03-01 17:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0016_auto_20210301_1959'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subcategory',
            name='image',
            field=models.ImageField(default='default_sub_category.jpg', upload_to='images'),
        ),
    ]
