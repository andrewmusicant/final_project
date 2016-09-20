from django.core.urlresolvers import resolve
from django.test import TestCase

from lending_app.views import country
from lending_app.models import Bank, State


class IndexPageTest(TestCase):
    def test_root_url_resolves_to_home_page_view(self):
        found = resolve('/')
        self.assertEqual(found.func, country)


class BankModelTest(TestCase):
    def test_retrieving_items_from_database(self):
        b = Bank.objects.get(name="1st Advantage Bank")
        self.assertEqual(b.name, "1st Advantage Bank")

    def test_data_migration_imported_bank_correctly(self):
        b = Bank.objects.get(name="1st Advantage Bank")
        self.assertEqual(b.state.name, 'Missouri')
        self.assertEqual(b.location, 'Saint Peters, MO, 63376')
        self.assertEqual(b.number_of_employees, 18)
        self.assertEqual(b.number_domestic_offices, 1)
        self.assertEqual(b.total_assets, 93900000)
        self.assertEqual(b.total_liability, 86189000)

        self.assertEqual(b.total_deposits, 78749000)
        self.assertEqual(b.common_stock, 534000)
        self.assertEqual(b.derivatives, 0)
        self.assertEqual(b.total_securities, 4357000)
        self.assertEqual(b.asset_backed_securities, 0)
        self.assertEqual(b.mortgage_backed_securities, 4357000)
        self.assertEqual(b.family_residential_loans, 9610000)
        self.assertEqual(b.home_equity_loans, 1139000)
        self.assertEqual(b.adjustable_rate_loans_secured_by_family_residential, 350000)


class StateModelTest(TestCase):
    pass
