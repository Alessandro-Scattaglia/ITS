lista = list(map(int,input("inserisci una lista di numeri separati da spazi").split()))

max = 0

for numero in lista:
    if numero > max:
        max = numero



print(max)
