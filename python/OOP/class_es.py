class Persona:
    def __init__(self,nome,eta):
        self.nome = nome
        self.eta = eta

p = Persona("ugo", 55)

print(f"Nome: {p.nome} \nEta: {p.eta}")