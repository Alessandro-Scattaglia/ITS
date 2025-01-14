try:
    x = int(input("inserisci un numero"))
    y = int(input("inserisci un numero"))
    print(x/y)

except ValueError:
    print("non hai inserito un numero")
except ZeroDivisionError:
    print("non puoi inserire zero")
except Exception as e:
    print(f"errore generico {e}")
