from django.urls import path
from .views import (
    ContractorListView,
    ContractorDetailView,
    ContractorCreateView,
    ContractorUpdateView,
    ContractorDeleteView,
    SkillListView,
    CityListView
    )

urlpatterns = [
    path('contractors', ContractorListView.as_view()),
    path('contractors/<pk>', ContractorDetailView.as_view()),
    path('create', ContractorCreateView.as_view()),
    path('contractors/<pk>/remove', ContractorDeleteView.as_view()),
    path('contractors/<pk>/update', ContractorUpdateView.as_view()),


    path('skills', SkillListView.as_view()),
    path('cities', CityListView.as_view())
]