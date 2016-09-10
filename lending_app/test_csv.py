import os
import csv

def import_data():
    filename = os.path.abspath('../north_carolina_banks.csv')
    with open(filename) as f:
        f.seek(0)
        reader = csv.reader(f, delimiter=",")
        next(reader)
        for row in reader:
            print(row)

import_data()
