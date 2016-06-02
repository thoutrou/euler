f_first = 1
f_second = 1
i = 2
while len(str(f_second)) < 1000:
    i += 1
    f_temp = f_second
    f_second += f_first
    f_first = f_temp

print(f_second)
print("Index", i)


