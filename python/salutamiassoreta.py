def salutame_a_sorreta(nome_sorella):
    print(f"ciao", nome_sorella)

salutame_a_sorreta("alessandro")

def faccio_cose():
    print("sto facendo cose")

def funzione_con_default(cognome ="scattaglia"):
    print(cognome)


def funz_esterna(x):
    def funzione_interna(y):
        return y*2
    return funzione_interna(x) +1