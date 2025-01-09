a = int(input("inserire il numero di partenza: "))
b = int(input("inserire il numero di fine: "))
somma=0
for i in range(a,b):
    if i%2 ==0:
        somma+=i
    else:
        somma = somma

print(f"la somma è {somma}")
