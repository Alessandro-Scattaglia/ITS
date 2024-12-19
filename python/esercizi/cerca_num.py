lista = [1,2,1]

n = int(input("inserire un numero: "))
count =0
for i in lista:
    if i == n:
        count+=1
    else:
        count+=0
print(count)