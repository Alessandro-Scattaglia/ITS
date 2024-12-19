n = int(input("inserisci il numero di elementi: "))

fibonacci = [1, 1]  

for i in range(2, n):  
    fibonacci.append(fibonacci[i-1] + fibonacci[i-2])  


for num in fibonacci:
    print(num)

