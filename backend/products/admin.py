from django.contrib import admin
from products.models import *
from django.db import models
from django import forms
# django.db.models.manager.Manager


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


class SubCategoryFilter(admin.SimpleListFilter):
    title = 'Sub Category'
    parameter_name = 'sub_category'

    def filter_qs(self, request, queryset):
        if 'category__id__exact' in request.GET:
            sub_categories = queryset.filter(category_id=request.GET['category__id__exact'])
        else:
            sub_categories = queryset.all()

        return sub_categories

    def lookups(self, request, model_admin):
        qs = SubCategory.objects
        sub_categories = self.filter_qs(request, qs)
        return (
            (sub_cat.pk, sub_cat.name) for sub_cat in sub_categories
        )

    def queryset(self, request, queryset):

        qs = self.filter_qs(request, queryset)
        qs = qs.filter(sub_category_id=request.GET['sub_category']) if 'sub_category' in request.GET else qs

        return qs


class ProductAdmin(admin.ModelAdmin):
    inlines = [
        ImageInline,
    ]
    form = ProductForm
    list_display = ('name', 'description', 'category', 'sub_category', 'price', 'units', 'product_tags')
    list_filter = ('category', SubCategoryFilter)

    def product_tags(self, obj):
        return ', '.join([tag.name for tag in obj.tags.all()])

    class Media:
        js = (
            'js/products.js',       # project static folder
        )


class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'image_tag')
    list_filter = ['category']


class CategoryAdmin(admin.ModelAdmin):
    inlines = [
        SubCategoryInline,
    ]
    form = CategoryForm
    list_display = ('name', 'icon', 'position', 'sub_categories')
    list_filter = []

    def sub_categories(self, obj):
        return ', '.join([sub.name for sub in obj.sub_categories.all()])


admin.site.register(Image, ImageAdmin)
admin.site.register(Tag)
admin.site.register(SubCategory, SubCategoryAdmin)
# admin.site.register(Category)
admin.site.register(Banner, BannerAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
