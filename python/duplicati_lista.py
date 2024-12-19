lista = [1, 2, 2, 3, 4, 4, 5]

unici = []
for numero in lista:
    if lista.count(numero) == 1:
        unici.append(numero)

print("Numeri non duplicati:", unici)
