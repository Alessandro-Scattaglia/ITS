import random
soluzione = random.randint(1, 100)

for i in range(10):
    n = int(input("inserire un numero tra 1 e 100: "))
   
    if n == soluzione:
        print(f"hai indovinato, il numero era {soluzione}!!!")
        break
    if n < soluzione:
        print("il numero da indovinare è più grande")
    elif n > soluzione:
        print("il numero da indovinare è più piccolo")
    
    if i == 10:
        print(f"non sei riuscito ad indovinare il numero!, era {soluzione}. Semplice no??!!!")



