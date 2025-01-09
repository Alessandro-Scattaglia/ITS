from abc import ABC, abstractmethod

class Forma(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimetro(self):
        pass

class Rettangolo(Forma):
    def __init__(self, larghezza, altezza):
        self.larghezza = larghezza
        self.altezza = altezza

    def area(self):
        return self.larghezza * self.altezza

    def perimetro(self):
        return 2 * (self.larghezza + self.altezza)

class Cerchio(Forma):
    def __init__(self, raggio):
        self.raggio = raggio

    def area(self):
        return 3.14 * self.raggio**2

    def perimetro(self):
        return 2 * 3.14 * self.raggio


rettangolo = Rettangolo(5, 10)
cerchio = Cerchio(7)

print(f"Area del rettangolo: {rettangolo.area()}")
print(f"Perimetro del rettangolo: {rettangolo.perimetro()}")

print(f"Area del cerchio: {cerchio.area()}")
print(f"Perimetro del cerchio: {cerchio.perimetro()}")
