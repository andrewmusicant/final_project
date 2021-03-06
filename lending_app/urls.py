from django.conf.urls import url
from . import views

app_name = 'lending'

urlpatterns = [
    url(r'^$', views.country, name='index'),
    # url(r'^state/(?P<pk>[0-9]+)/$', views.state, name='state'),
    url(r'^state/(?P<state>\D+)/$', views.state, name='state'),
    url(r'^country$', views.country, name='country'),
    url(r'^bank_detail/(?P<bank_id>[0-9]+)/$', views.bank_detail, name='bank_detail'),
    url(r'^location$', views.location, name='location'),
    url(r'^about$', views.about, name='about'),
    url(r'^comparison/(?P<bank1_id>[0-9]+)/(?P<bank2_id>[0-9]+)/$', views.bank_comparison, name='bank_comparison'),
]
