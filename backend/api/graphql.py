import graphene
from graphene_django import DjangoObjectType
from products.models import *


class CategoryType(DjangoObjectType):
    class Meta:
        model = Category
        fields = ("id", "name", "products")


class TagType(DjangoObjectType):
    class Meta:
        model = Tag
        fields = ("id", "name", "products")


class ImageType(DjangoObjectType):
    class Meta:
        model = Image
        fields = '__all__'


class BannerType(DjangoObjectType):
    class Meta:
        model = Banner
        fields = '__all__'


class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = '__all__'


class Query(graphene.ObjectType):
    all_categories = graphene.List(CategoryType)
    all_tags = graphene.List(TagType)
    all_banners = graphene.List(BannerType)
    products_by_tag = graphene.List(ProductType, name=graphene.String(required=True))

    def resolve_all_categories(root, info):
        return Category.objects.select_related("products").all()

    def resolve_all_banners(root, info):
        return Banner.objects.all()

    def resolve_all_tags(root, info):
        return Tag.objects.prefetch_related('products').all()

    def resolve_products_by_tag(root, info, name):
        return Product.objects.filter(tags__name=name).all()


schema = graphene.Schema(query=Query)
