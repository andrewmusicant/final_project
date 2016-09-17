from django.db import models


class State(models.Model):
    name = models.CharField(max_length=100)
    number_of_banks = models.IntegerField(default=0)
    average_score = models.FloatField()


class Bank(models.Model):
    state = models.ForeignKey(State)
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    number_of_employees = models.IntegerField(default=0)
    number_domestic_offices = models.IntegerField(default=0)
    total_assets = models.BigIntegerField(default=0)
    total_liability = models.BigIntegerField(default=0)

    total_deposits = models.BigIntegerField(default=0)
    common_stock = models.BigIntegerField(default=0)
    derivatives = models.BigIntegerField(default=0)
    total_securities = models.BigIntegerField(default=0)
    asset_backed_securities = models.BigIntegerField(default=0)
    mortgage_backed_securities = models.BigIntegerField(default=0)
    family_residential_loans = models.BigIntegerField(default=0)
    home_equity_loans = models.BigIntegerField(default=0)
    adjustable_rate_loans_secured_by_family_residential = models.BigIntegerField(default=0)

    total_num_loans_small = models.BigIntegerField(default=0)
    total_num_loans_micro = models.BigIntegerField(default=0)
    total_num_loans_farm = models.BigIntegerField(default=0)

    total_loans = models.BigIntegerField(default=0)
    total_amount_individual = models.BigIntegerField(default=0)
    total_amount_small = models.BigIntegerField(default=0)
    total_amount_micro = models.BigIntegerField(default=0)
    total_amount_farm = models.BigIntegerField(default=0)

    individual_loan_percentage = models.FloatField()
    small_loan_percentage = models.FloatField()
    micro_loan_percentage = models.FloatField()
    farm_loan_percentage = models.FloatField()

    other_real_estate_owned = models.BigIntegerField(default=0)
    real_estate_acquired = models.BigIntegerField(default=0)
    other_real_estate_owned_family = models.BigIntegerField(default=0)
    other_real_estate_owned_multi_family_residential = models.BigIntegerField(default=0)
    other_real_estate_owned_commercial_real_estate = models.BigIntegerField(default=0)
    other_real_estate_owned_construction_development = models.BigIntegerField(default=0)
    other_real_estate_owned_farmland = models.BigIntegerField(default=0)
    foreclosed_properties_from_GNMA_loans = models.BigIntegerField(default=0)

    net_interest_margin = models.FloatField()
    noninterest_income_to_average_assets = models.FloatField()
    noninterest_expense_to_average_assets = models.FloatField()
    loan_and_lease_loss_provision_to_assets = models.FloatField()
    net_operating_income_to_assets = models.FloatField()

    return_on_assets = models.FloatField()
    return_on_equity = models.FloatField()

    retained_earnings_to_average_equity = models.FloatField()
    net_charge_offs_to_loans = models.FloatField()
    net_loans_and_leases_to_total_assets = models.FloatField()
    net_loans_and_leases_to_deposits = models.FloatField()
    net_loans_and_leases_to_core_deposits = models.FloatField()
    total_domestic_deposits_to_total_assets = models.FloatField()
    average_total_assets = models.FloatField()
    average_earning_assets = models.FloatField()
    average_equity = models.FloatField()
    average_total_loans = models.FloatField()

    total_complaints = models.IntegerField(default=0)
    score = models.FloatField()
