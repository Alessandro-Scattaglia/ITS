n = int(input("Inserire un numero: "))


if n ==0:
    print("L'anno non è bisestile")

elif n%100 != 0 and n%4 ==0 or n%400==0:
    print("L'anno è bisestile")
else:
    print("L'anno non è bisestile")

