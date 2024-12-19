import math

n = int(input("Inserisci un numero: "))  
n_cifre = int(math.log10(n)) + 1  
n_am = 0
for cifra in str(n):  
    n_am += int(cifra) ** n_cifre  


if n_am == n:
    print(f"Il risultato è: {n_am}")
else:
    print(f"Il numero non è un numero di amstrong perchè fa: {n_am}")
