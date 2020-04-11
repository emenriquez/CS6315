from django.urls import path
from .views import ContractorListView, ContractorDetailView, SkillListView

urlpatterns = [
    path('contractors', ContractorListView.as_view()),
    path('contractors/<pk>', ContractorDetailView.as_view()),
    path('', SkillListView.as_view())
]