def process_file(input_file, output_file):
    try:
        # Inizializza i contatori
        char_count = 0
        space_count = 0
        word_count = 0
        comma_count = 0
        period_count = 0

        # Legge e processa le righe del file di input
        with open(input_file, 'r', encoding='utf-8') as f:
            for line in f:
                riga = line.strip()
                
                # Aggiorna i contatori
                char_count += sum(1 for char in riga if char.isalpha())
                space_count += riga.count(' ')
                word_count += len(riga.split())
                comma_count += riga.count(',')
                period_count += riga.count('.')

        # Scrive nel file di output
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(f"Totale lettere: {char_count}\n")
            f.write(f"Totale spazi: {space_count}\n")
            f.write(f"Totale parole: {word_count}\n")
            f.write(f"Totale virgole: {comma_count}\n")
            f.write(f"Totale punti: {period_count}\n")
    except Exception as e:
        print(f"Errore: {e}")

if __name__ == "__main__":
    process_file("input.txt", "output.txt")
