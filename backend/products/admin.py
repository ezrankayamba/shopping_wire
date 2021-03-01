from django.contrib import admin
from products.models import *
from django.db import models
from django import forms


admin.site.site_title = 'Shopping Wire'
admin.site.site_header = 'Shopping Wire'
admin.site.index_title = 'Backend Settings'


class ImageAdmin(admin.ModelAdmin):
    readonly_fields = ('image_tag',)
    list_display = ['img_file', 'image_tag']
    list_filter = ['product']


class BannerAdmin(admin.ModelAdmin):
    readonly_fields = ('image_tag',)
    list_display = ['description', 'img_file', 'image_tag']


class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        exclude = []
        widgets = {
            'tags': forms.CheckboxSelectMultiple()
        }


class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        exclude = []


class ImageInline(admin.TabularInline):
    model = Image
    show_change_link = True


class SubCategoryInline(admin.TabularInline):
    model = SubCategory
    show_change_link = True


class ProductAdmin(admin.ModelAdmin):
    inlines = [
        ImageInline,
    ]
    form = ProductForm
    list_display = ('name', 'description', 'category', 'price', 'units', 'product_tags')
    list_filter = ['category']

    def product_tags(self, obj):
        return ', '.join([tag.name for tag in obj.tags.all()])


class CategoryAdmin(admin.ModelAdmin):
    inlines = [
        SubCategoryInline,
    ]
    form = CategoryForm

    def product_tags(self, obj):
        return ', '.join([tag.name for tag in obj.tags.all()])


admin.site.register(Image, ImageAdmin)
admin.site.register(Tag)
admin.site.register(SubCategory)
# admin.site.register(Category)
admin.site.register(Banner, BannerAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
