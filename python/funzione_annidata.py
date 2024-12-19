def funz_esterna(x):
    def funzione_interna(y):
        return y*2
    return funzione_interna(x) +1