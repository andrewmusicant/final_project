import csv
import os


def count_rows(reader):
    return sum(1 for row in reader)


filename = os.path.abspath('bank_data.csv')
with open(filename) as f:
    f.seek(0)
    reader = csv.reader(f, delimiter=",")
    with open('filtered_bank_data.csv', 'w') as w:
        writer = csv.writer(w, delimiter=',')
        pre_line = next(reader)

        while True:
            try:
                cur_line = next(reader)
                if pre_line[0][:13] == cur_line[0][:13]:
                    pass
                else:
                    writer.writerow(cur_line)
                    # write to new csv

                pre_line = cur_line
            except:
                break
