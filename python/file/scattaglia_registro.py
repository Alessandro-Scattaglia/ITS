class Studente:
    def __init__(self, cognome, voto):
        self.cognome = cognome
        self.voto = voto

    def __str__(self):
        return f"{self.cognome} - {self.voto}"


class Registro:
    def __init__(self, file_registro="registro.txt"):
        self.studenti = []
        self.file_registro = file_registro

    def aggiungi_studente(self, cognome, voto):
        self.studenti.append(Studente(cognome, voto))
        self.salva()  
        print(f"Studente {cognome} aggiunto con voto {voto}.")

    def elimina_studente(self, cognome):
        for studente in self.studenti:
            if studente.cognome == cognome:
                self.studenti.remove(studente)
                self.salva() 
                print(f"Studente {cognome} eliminato.")
                return
        print(f"Studente {cognome} non trovato.")

    def salva(self):
        try:
            with open(self.file_registro, "w") as file:
                for studente in self.studenti:
                    file.write(f"{studente.cognome},{studente.voto}\n")
            print(f"Registro salvato in '{self.file_registro}'.")
        except Exception as e:
            print(f"Errore durante il salvataggio: {e}")

    def leggi(self):
        try:
            with open(self.file_registro, "r") as file:
                self.studenti = [
                    Studente(*line.strip().split(",")) for line in file
                ]
            print("Registro caricato:")
            for studente in self.studenti:
                print(studente)
        except FileNotFoundError:
            print(f"File '{self.file_registro}' non trovato.")
        except Exception as e:
            print(f"Errore durante la lettura del file: {e}")



registro = Registro()

while True:
    print("\n1. Aggiungi studente")
    print("2. Elimina studente")
    print("3. Carica registro")
    print("4. Esci")

    try:
        scegli = int(input("Scegli un'opzione: "))
    except ValueError:
        print("Inserisci un numero valido!")
        continue

    match scegli:
        case 1:
            cognome = input("Inserisci il cognome dello studente: ")
            voto = input("Inserisci il voto dello studente: ")
            registro.aggiungi_studente(cognome, voto)
        case 2:
            cognome = input("Inserisci il cognome dello studente da eliminare: ")
            registro.elimina_studente(cognome)
        case 3:
            registro.leggi()
        case 4:
            print("Uscita dal programma.")
            break
        case _:
            print("Opzione non valida. Riprova.")
