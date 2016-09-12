from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^state/(?P<pk>[0-9]+)/$', views.state, name='state'),
    url(r'^country$', views.country, name='country'),
    url(r'^bank_detail$', views.bank_detail, name='bank_detail'),
    url(r'^location$', views.location, name='location'),
]
