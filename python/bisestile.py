anno = int(input("Inserire l'anno per verificare se è bisestile: "))

if (anno % 4 == 0 and anno % 100 != 0) or (anno % 400 == 0):
    print(f"L'anno {anno} è bisestile")
else:
    print(f"L'anno {anno} non è bisestile")
