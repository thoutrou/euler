import math

string = str(math.factorial(100))
total = 0
for i in string:
    total += int(i)

print(total)
