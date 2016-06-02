numbers = {}
for a in range(2, 101):
    for b in range(2, 101):
        numbers[a**b] = True

print(len(numbers.keys()))
