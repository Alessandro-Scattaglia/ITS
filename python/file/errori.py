try:
    file = open("prova.txt")
    contenuto = file.read()
    print(contenuto)



except FileNotFoundError:
    print("il file non esiste")


finally:
    if not file.closed:
        file.close()
