from django.urls import path
from .views import ContractorListView, ContractorDetailView, SkillListView, CityListView

urlpatterns = [
    path('contractors', ContractorListView.as_view()),
    path('contractors/<pk>', ContractorDetailView.as_view()),
    path('skills', SkillListView.as_view()),
    path('cities', CityListView.as_view())
]