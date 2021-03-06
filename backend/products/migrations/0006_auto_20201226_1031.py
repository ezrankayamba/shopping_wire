# Generated by Django 3.1.4 on 2020-12-26 07:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_auto_20201223_0957'),
    ]

    operations = [
        migrations.CreateModel(
            name='Banner',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img_file', models.ImageField(upload_to='images')),
                ('order_num', models.IntegerField(default=0)),
            ],
            options={
                'ordering': ['order_num'],
            },
        ),
        migrations.AlterModelOptions(
            name='image',
            options={'ordering': ['order_num']},
        ),
        migrations.AlterField(
            model_name='image',
            name='img_file',
            field=models.ImageField(upload_to='images'),
        ),
        migrations.AlterField(
            model_name='image',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='products.product'),
        ),
        migrations.AlterField(
            model_name='product',
            name='tags',
            field=models.ManyToManyField(related_name='products', to='products.Tag'),
        ),
    ]
