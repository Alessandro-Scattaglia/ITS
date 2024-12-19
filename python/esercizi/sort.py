def selection_sort(lista):
    for i in range(len(lista)):
        min = i
        for j in range(i+1, len(lista)):
            if lista[j] < lista[min]:
                min = j
        lista[i],lista[min] = lista[min],lista[i]



            



lista = [1,4,3,8]
selection_sort(lista)

print(lista)
