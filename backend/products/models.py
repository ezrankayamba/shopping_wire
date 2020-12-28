from django.db import models
from django.utils.html import mark_safe


class Category(models.Model):
    name = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'


class Tag(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200, unique=True)
    description = models.CharField(max_length=400)
    category = models.ForeignKey(to=Category, on_delete=models.CASCADE)
    price = models.DecimalField(decimal_places=2, max_digits=20)
    units = models.CharField(max_length=10)
    tags = models.ManyToManyField(to=Tag, related_name='products')

    def __str__(self):
        return self.name


class Image(models.Model):
    img_file = models.ImageField(upload_to='images')
    product = models.ForeignKey(to=Product, on_delete=models.CASCADE, related_name='images')
    order_num = models.IntegerField(default=0)

    def __str__(self):
        return self.img_file.name

    def image_tag(self):
        return mark_safe(f'<img src="/media/{self.img_file}" height="100" />')
    image_tag.short_description = 'Preview'

    class Meta:
        ordering = ['order_num']


class Banner(models.Model):
    img_file = models.ImageField(upload_to='images')
    order_num = models.IntegerField(default=0)
    description = models.CharField(max_length=100)

    def __str__(self):
        return self.img_file.name

    def image_tag(self):
        return mark_safe(f'<img src="/media/{self.img_file}" height="100" />')
    image_tag.short_description = 'Preview'

    class Meta:
        ordering = ['order_num']
