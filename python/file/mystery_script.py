class TextProcessor:
    def __init__(self, input_file, output_file):
        # Memorizza i nomi dei file di input e di output
        self.input_file = input_file
        self.output_file = output_file
        # Qui verranno memorizzate le linee lette dal file di input
        self.lines = []

    def read_file(self):
        """
        Legge tutte le righe dal file di input e le salva in self.lines.
        Utilizza la gestione delle eccezioni per eventuali errori di lettura.
        """
        try:
            with open(self.input_file, 'r', encoding='utf-8') as f:
                self.lines = f.readlines()
        except FileNotFoundError:
            print(f"Il file {self.input_file} non è stato trovato.")
        except PermissionError:
            print(f"Non hai i permessi per leggere il file {self.input_file}.")
        except Exception as e:
            print(f"Errore durante la lettura del file: {str(e)}")

    def transform_lines(self):
        """
        Esegue una trasformazione (misteriosa!) su ogni linea letta.
        In questa funzione puoi inserire manipolazioni di stringhe (ad esempio
        invertire la stringa, eliminare spazi bianchi, ecc.).
        """
        transformed = []
        for line in self.lines:
            # Rimuove eventuali caratteri di fine riga e spazi bianchi
            line = line.strip()
            # Inverte la stringa
            line = line[::-1]
            # Aggiungi altre eventuali manipolazioni se desideri
            transformed.append(line)
        self.lines = transformed

    def write_file(self):
        """
        Scrive le linee trasformate nel file di output.
        Gestisce eventuali eccezioni in scrittura.
        """
        try:
            with open(self.output_file, 'w', encoding='utf-8') as f:
                for line in self.lines:
                    f.write(line.upper() + '\n')
        except PermissionError:
            print(f"Non hai i permessi per scrivere nel file {self.output_file}.")
        except Exception as e:
            print(f"Errore durante la scrittura del file: {str(e)}")


def main():
    # Crea un'istanza di TextProcessor passando i nomi di file di input e output
    processor = TextProcessor("input.txt", "output.txt")

    # Legge le linee dal file di input
    processor.read_file()

    # Trasforma le linee lette con la funzione dedicata
    processor.transform_lines()

    # Scrive le linee trasformate nel file di output
    processor.write_file()


if __name__ == "__main__":
    main()
