solution = 0

# limit is 9**p * (p+1)
for i in range(2, 9**5*6):
    sum = 0
    for d in str(i):
        sum += int(d)**5
    if sum == i:
        solution += sum

print(solution)

