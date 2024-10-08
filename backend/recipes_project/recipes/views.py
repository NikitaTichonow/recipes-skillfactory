from rest_framework import viewsets
from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django_filters.rest_framework import DjangoFilterBackend

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category']


@api_view(['GET'])
def dishes_view(request):
    if request.method == 'GET':
        recipes = Recipe.objects.filter(
            categoryType=request.query_params['category'])
        serializer = RecipeSerializer(recipes, many=True)
        return Response(serializer.data)
