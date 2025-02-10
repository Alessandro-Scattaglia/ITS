while True:
    print("1 - Somma")
    print("2 - Sottrazione")
    print("3 - Moltiplicazione")
    print("4 - Divisione")
    print("5 - Potenza")
    print("q - Esci")

    scelta = input("Scegli un'operazione: ")
    
    if scelta == "q":
        print("Uscita")
        break

    if scelta not in ["1", "2", "3", "4", "5"]:
        print("Scelta non valida, riprova")
        continue

    try:
        a = float(input("Inserisci il primo numero: "))
        b = float(input("Inserisci il secondo numero: "))
    except ValueError:
        print("Errore: devi inserire numeri validi")
        continue

    if scelta == "1":
        print(f"Risultato: {a+b}")
    elif scelta == "2":
        print(f"Risultato: {a-b}")
    elif scelta == "3":
        print(f"Risultato: {a*b}")
    elif scelta == "4":
        if b == 0:
            print("Errore: divisione per zero non consentita")
        else:
            print(f"Risultato: {a/b}")
    elif scelta == "5":
        print(f"Risultato: {a**b}")