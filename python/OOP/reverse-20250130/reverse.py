class GestoreDati:
    def __init__(self, percorso):
        self.percorso = percorso
        self.contenuto = []
        self.sommario = {}
    
    def leggi_file(self):
        f = open(self.percorso, 'r')
        righe = f.readlines()
        f.close()
        for r in righe:
            valori = r.strip().split(',')
            self.contenuto.append(valori)
    
    def elabora_dati(self):
        for indice, riga in enumerate(self.contenuto):
            try:
                chiave = riga[0]
                valore = int(riga[1]) * (indice + 1)
                if chiave not in self.sommario:
                    self.sommario[chiave] = valore
                else:
                    self.sommario[chiave] += valore
            except:
                pass

    def salva_risultati(self, destinazione):
        g = open(destinazione, 'w')
        for k, v in self.sommario.items():
            g.write(k + ':' + str(v) + '\n')
        g.close()

def analizza(percorso_input, percorso_output):
    gestore = GestoreDati(percorso_input)
    gestore.leggi_file()
    gestore.elabora_dati()
    gestore.salva_risultati(percorso_output)

try:
    analizza('input.txt', 'risultati.txt')
except FileNotFoundError:
    print('File mancante')
except Exception as e:
    print('Errore:', e)
