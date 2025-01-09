class Animale:
    def parla(self):
        pass

class Cane(Animale):
    def parla(self):
        return "BAU BAU"

class Gatto(Animale):
    def parla(self):
        return "MIAO MIAO"

def fai_parlare(animale):
    print(animale.parla())

fai_parlare(Cane())
fai_parlare(Gatto())