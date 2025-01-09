saldo = 1000

interesse = 5

for i in range(3):
    saldo = saldo + (saldo/100)*interesse
    print(f"il saldo dell'anno {i+1} è: {saldo}\n")

