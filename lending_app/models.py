from django.db import models


class State(models.Model):
    name = models.CharField(max_length=100)


class Bank(models.Model):
    state = models.ForeignKey(State)
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    net_income = models.IntegerField(default=0)
    total_assets = models.IntegerField(default=0)
    total_liability = models.IntegerField(default=0)
    return_on_equity = models.DecimalField(max_digits=5, decimal_places=4)
    total_num_loans_small = models.IntegerField(default=0)
    total_num_loans_micro = models.IntegerField(default=0)
    total_amount_small = models.IntegerField(default=0)
    total_amount_micro = models.IntegerField(default=0)
