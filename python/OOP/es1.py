class Mezzi:
    def __init__(self, modello, targa, posti, ruote):
        self.modello = modello
        self.targa = targa
        self.posti = posti
        self.ruote = ruote

    def descrizione(self):
        return f"Modello: {self.modello}, Targa: {self.targa}, Posti: {self.posti}, Ruote: {self.ruote}"


class Auto(Mezzi):
    def __init__(self, modello, targa, posti, ruote, tipo_alimentazione):
        Mezzi.__init__(self, modello, targa, posti, ruote)
        self.tipo_alimentazione = tipo_alimentazione

    def descrizione(self):
        return f"{Mezzi.descrizione(self)}, Tipo di alimentazione: {self.tipo_alimentazione}"


class Autobus(Mezzi):
    def __init__(self, modello, targa, posti, ruote, lunghezza):
        Mezzi.__init__(self, modello, targa, posti, ruote)
        self.lunghezza = lunghezza

    def descrizione(self):
        return f"{Mezzi.descrizione(self)}, Lunghezza: {self.lunghezza} metri"


auto = Auto("Fiat 500", "AB123CD", 4, 4, "benzina")
autobus = Autobus("Mercedes Citaro", "XYZ456", 50, 6, 12)

print(auto.descrizione())
print(autobus.descrizione())
