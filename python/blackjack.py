import random

def crea_mazzo():
    valori = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    mazzo = valori * 4  
    random.shuffle(mazzo)
    return mazzo

conto = int(input("inserire il patrimonio iniziale: "))
mazzo = crea_mazzo()
puntata = int(input("inserire la puntata: "))
if puntata > conto:
    print("zio hai finito lo stipendio, abbassa la cresta")

def valore_carta(carta):
    if carta == 'A':
        return 11
    elif carta in ['J', 'Q', 'K']:
        return 10
    else:
        return int(carta)




carta1 = mazzo.pop()
carta1 = valore_carta(carta1)
print(f"carta1: {carta1}")




carta2 = mazzo.pop()
if carta2 == 'A':
    scelta = int(input("Hai pescato un Asso! Vuoi che valga 1 o 11? "))
    carta2 = scelta
else:
    carta2 = valore_carta(carta2)
print(f"carta2: {carta2}")





somma = carta1 + carta2
print(f"somma delle due carte: {somma}")

if somma == 21:
    print("BLACKJACK!!!")
elif somma > 21:
    print("HAI PERSO")
if somma <= 21:
    while True:
        continua = int(input("Pesca un'altra carta? 1 per sì, 0 per no: "))
        if continua == 1:
            carta = mazzo.pop()
            carta = valore_carta(carta)
            print(f"Hai pescato: {carta}")
            somma += carta
            print(f"Somma attuale: {somma}")
            if somma > 21:
                print("HAI PERSO")
                break
            elif somma == 21:
                print("BLACKJACK!!!")
                break
        else:
            print(f"Somma finale: {somma}")
            break

carta_diler = mazzo.pop()
carta_diler = valore_carta(carta_diler)
print(f"Carta del diler: {carta_diler}")




