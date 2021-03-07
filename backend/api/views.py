from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from products.models import SubCategory


def sub_categories(request):
    return JsonResponse({
        'result': 0,
        'data': list(SubCategory.objects.filter(category_id=request.GET['category_id']).values('id', 'name'))
    })
