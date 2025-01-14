from es1 import Mezzi

class Auto(Mezzi):
    def __init__(self,modello,posti,targa,manutenzione,alimentazione,nick,hp,litriBag):
        super().__init__(modello,posti,targa,manutenzione,alimentazione,nick)
        self.hp = hp
        self.litriBag = litriBag
        self.__stato = False
    def dammi_stato(self):
        return self.__stato
    
    def occupato(self):
        if self.__stato:
            return f"{self.nick} è occupato"
        else:
            self.__stato = True
            return f"{self.nick} è libero"
    
    