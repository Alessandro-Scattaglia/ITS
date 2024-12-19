import turtle

# Configurazione dello schermo
screen = turtle.Screen()
screen.title("Stella")
screen.bgcolor("black")

# Configurazione della penna
pen = turtle.Turtle()
pen.shape("turtle")
pen.color("yellow")
pen.speed(3)

# Funzione per disegnare una stella a 5 punte
def draw_star(size):
    for _ in range(5):
        pen.forward(size)
        pen.right(144)  # Angolo tra i lati della stella

# Posizioniamo la tartaruga e disegniamo la stella
pen.penup()
pen.goto(0, -100)  # Posizioniamo la tartaruga per evitare che parta dal centro
pen.pendown()

draw_star(200)  # La dimensione della stella

# Manteniamo la finestra aperta
screen.mainloop()
