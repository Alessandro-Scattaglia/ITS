#importo il modulo turtle
import turtle  # Importa il modulo `turtle`, che permette di creare disegni grafici tramite una tartaruga virtuale

#creazione della finestra della turtle
screen = turtle.Screen()  # Crea una finestra grafica per la tartaruga
screen.title("ggs")  # Imposta il titolo della finestra a "ggs"
screen.bgcolor("purple")  # Imposta lo sfondo della finestra al colore viola

#creazione della tartaruga
pen = turtle.Turtle()  # Crea una "tartaruga", un oggetto che può disegnare sullo schermo

# metto il cursore a forma di tartaruga
pen.shape("turtle")  # Cambia la forma del cursore della tartaruga in una vera tartaruga
pen.color("yellow")  # Imposta il colore della tartaruga (e del tratto di disegno) a giallo
pen.speed(2)  # Imposta la velocità della tartaruga a un valore medio (1 è lento, 10 è molto veloce)

lati = 6
contatore = 0
avanti = 100 #valore di forward
angolo = 15 #valore di left
while contatore<lati: 
    pen.forward(avanti)
    pen.left(angolo*contatore)
    contatore +=1


screen.mainloop()

    