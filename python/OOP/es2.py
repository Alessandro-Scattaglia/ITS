#una domanda della verifica
#creare una classe privata con gli attributi nome, cognome e stampare il contenuto

class Persona:
    def __init__(self,nome,cognome):
        self.nome = nome
        self.cognome = cognome
p = Persona("alessandro", "Scattaglia")
print(f"nome e cognome: {p.nome} {p.cognome} ")
        