from django.urls import path
from .views import (
    ContractorListView,
    ContractorDetailView,
    ContractorCreateView,
    ContractorRUDView,
    SkillListView,
    CityListView
    )

urlpatterns = [
    path('contractors', ContractorListView.as_view()),
    path('contractors/<pk>', ContractorDetailView.as_view()),
    path('create', ContractorCreateView.as_view()),
    path('contractors/<pk>/RUD', ContractorRUDView.as_view()),


    path('skills', SkillListView.as_view()),
    path('cities', CityListView.as_view())
]