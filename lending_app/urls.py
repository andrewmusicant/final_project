from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^state/(?P<pk>[0-9]+)/$', views.state, name='state'),
]
