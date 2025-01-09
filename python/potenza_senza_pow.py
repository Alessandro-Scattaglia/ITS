b = int(input("inserisci la base: "))
e = int(input("inserisci l'esponente "))
risultato = 1
i =0
a = b
for i in range(e-1):
    risultato = b*a
    i+=1
    a = risultato
print(risultato)

    

