import math


def curiousfraction(numerator, denominator):
    new_numerator = 1
    new_denominator = 1
    if numerator % 10 == 0 and denominator % 10 == 0:
        return -1

    for i in range(0, 2):
        n = str(numerator)[i]
        j = str(denominator).find(n)
        if j >= 0:
            new_numerator = int(str(numerator)[1-i])
            new_denominator = int(str(denominator)[1-j])
            break

    if new_denominator > 0 and denominator > 0:
        if new_numerator/new_denominator == numerator/denominator:
            return new_numerator/new_denominator
        else:
            return -1
    else:
        return -1


def lowestdenominator(fraction):
    d = 0
    i = 1
    while d == 0:
        if fraction * i == math.floor((fraction * i)):
            d = i
        i += 1

    return d


total = 1
count = 0
for denominator in range(10, 100):
    for numerator in range(10, denominator):
        fraction = curiousfraction(numerator, denominator)
        if fraction != -1:
            total *= fraction**-1   # or else the product will be 0.010000000000000002
            count += 1

print(lowestdenominator(total**-1)) # reverse the change (necessary?)
