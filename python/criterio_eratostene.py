def crivello_eratostene(limite):
    # Inizializza una lista booleana per segnare i numeri primi
    primi = [True] * (limite + 1)  # Da 0 a limite
    primi[0] = primi[1] = False  # 0 e 1 non sono numeri primi

    # Itera sui numeri fino alla radice quadrata del limite
    p = 2
    while p * p <= limite:
        if primi[p]:  # Se p è un numero primo
            # Segna tutti i multipli di p come non primi
            for i in range(p * p, limite + 1, p):
                primi[i] = False
        p += 1

    # Restituisci una lista di numeri primi
    return [num for num, is_primo in enumerate(primi) if is_primo]

# Imposta il limite a 100000
limite = 100000
numeri_primi = crivello_eratostene(limite)

# Stampa i numeri primi
print("Numeri primi da 1 a 100000:")
print(numeri_primi)