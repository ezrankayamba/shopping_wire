from django.db import models
from django.utils.html import mark_safe


class Category(models.Model):
    name = models.CharField(max_length=200, unique=True)
    icon = models.CharField(max_length=100, null=True)
    position = models.IntegerField(default=99)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'
        ordering = ['position']


class SubCategory(models.Model):
    name = models.CharField(max_length=200, unique=True)
    category = models.ForeignKey(to=Category, on_delete=models.CASCADE, related_name='sub_categories')
    image = models.ImageField(upload_to='images', null=False, default='images/default_sub_category.jpg')

    def image_tag(self):
        return mark_safe(f'<img src="/media/{self.image}" height="100" />')
    image_tag.short_description = 'Preview'

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Sub Categories'


class Tag(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200, unique=True)
    description = models.CharField(max_length=400)
    category = models.ForeignKey(to=Category, on_delete=models.CASCADE, related_name='products')
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
