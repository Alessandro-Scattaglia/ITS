f = open("prova.txt", "r")

print(f.read())


with open("prova.txt", "r") as file:
    contenuto = file.read()

print(contenuto)


with open("prova.txt", "r") as file:
    for riga in file:
        riga = "riga " + riga
        print(riga)
    
with open("prova.txt", "r") as file:
    riga = file.readline()
    while riga:
        print("porcodio" + riga)
        riga = file.readline()


