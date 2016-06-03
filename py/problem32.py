numbers = set()
for a in range(1, 99999999):
    if len(str(a) + str(a) + str(a*a)) > 9:
        break
    for b in range(a, 99999999):
        c = a * b
        if len(str(a) + str(b) + str(c)) > 9:
            break
        elif len(str(a) + str(b) + str(c)) == 9:
            number = set()
            for d in str(a)+str(b)+str(c):
                number.add(d)
            number.discard('0')
            if len(number) == 9:
                numbers.add(c)

solution = 0
for n in numbers:
    solution += n

print(solution)
