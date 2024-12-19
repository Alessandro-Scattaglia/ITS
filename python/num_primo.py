n = int(input("Inserire un numero: "))

if n < 2:
    print("Il numero non è primo")
else:
    for i in range(2, n):
        if n % i == 0:
            print("Il numero non è primo")
            break
    else:
        print("Il numero è primo")
