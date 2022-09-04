def prime(n):
    c = 0
    for i in range(2, n):
        if n % i == 0:
            c += 1
    return (c == 0)


for i in range(2, 201):
    if prime(i):
        print(i)
