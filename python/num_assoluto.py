n = int(input("inserisci un numero positivo o negativo: "))

print(f"il numero che hai inserito è {n}\n")

if n<0:
    n = -n
else:
    n = n
print(f"il valoe assoluto del numero che hai inserito è: {n}")