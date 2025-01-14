with open("20_pari.txt", "w") as f:
    i=0
    for i in range(1,21):
        if i%2==0:
            f.write(str(i)+ "\n")


with open("20_dispari.txt", "w") as f1:
    i=0
    for i in range(1,21):
        if i%2==1:
            f1.write(str(i)+ "\n")
