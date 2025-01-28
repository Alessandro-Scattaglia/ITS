def process_file(input_file, output_file):
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            lines = [line.strip()[::-1] for line in f]
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write('\n'.join(lines).upper() + '\n')
    except Exception as e:
        print(f"Errore: {e}")

if __name__ == "__main__":
    process_file("input.txt", "output.txt")
