import random

n_dadi = 2

facce_dadi = 6
media = 0
somma = 0
for i in range(n_dadi):
    a = random.randint(1, 6)
    print(f"nel {i+1} dado è uscito {a}")
    somma = a+somma
    media = (media + a) / (i+1)
print(f"la media è {media}")
