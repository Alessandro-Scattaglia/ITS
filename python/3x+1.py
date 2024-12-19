n = int(input("Inserire un numero: "))

count = 0
i=0
for i in range(100):

    if n == 1:
        break
    elif n % 2 == 0:
        n = n / 2
        print(n)
        count += 1
    else:
        n = 3 * n + 1
        print(n)
        count += 1

print(f"il numero di passaggi è {count}")

        