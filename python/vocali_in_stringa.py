stringa = "aiuola"
vocali = "aeiouAEIOU"
count=0
for carattere in stringa:
    if carattere in vocali:
        count+=1
    else:
        count+=0



stringa = "aiuola"
print(f"il numero di vocali nella parola '{stringa}' è {count}")