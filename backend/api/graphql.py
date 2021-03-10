import graphene
from graphene_django import DjangoObjectType
from products.models import *


class SubCategoryType(DjangoObjectType):
    class Meta:
        model = SubCategory
        fields = '__all__'


class CategoryType(DjangoObjectType):
    sub_categories = graphene.List(SubCategoryType)

    class Meta:
        model = Category
        fields = ('id', 'name', 'products', 'sub_categories', 'icon')

    def resolve_sub_categories(self, info):
        return self.sub_categories.all()


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
    sub_category = graphene.Field(SubCategoryType, id=graphene.Int(required=True))

    def resolve_all_categories(root, info):
        qs = Category.objects.all()
        return qs

    def resolve_sub_category(root, info, id):
        qs = SubCategory.objects.get(id=id)
        return qs

    def resolve_all_banners(root, info):
        return Banner.objects.all()

    def resolve_all_tags(root, info):
        return Tag.objects.prefetch_related('products').all()

    def resolve_products_by_tag(root, info, name):
        return Product.objects.filter(tags__name=name).all()


schema = graphene.Schema(query=Query)
