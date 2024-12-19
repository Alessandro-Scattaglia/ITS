n = input("inserisci una lista di numeri separati da spazi: ")

a=0

match a:
    case "I":
        print("1")
    case "V":
        print("5")
    case "X":
        print("10")
    case "L":
        print("50")
    case "C":
        print("100")
    case "D":
        print("500")
    case "M":
        print("1000")

        for i in n.split():
            print(a[i])
            i=i+1



    






