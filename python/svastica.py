#importo il modulo turtle
import turtle

# creazione della finestra della turtle

screen = turtle.Screen()
screen.title=("evvai di turtle prepotente")
screen.bgcolor("purple")

# creazione della tartaruga
pen = turtle.Turtle()
# metto il cursore a forma di tataruga
pen.shape("turtle")
pen.color("yellow")
pen.speed(2)


# disegno un quadrato

pen.forward(100) # muove avanti di 100 pixel
pen.left(90)
pen.forward(200)
pen.right(90)
pen.forward(100)
pen.penup()

pen.goto(0,200)
pen.pendown()
pen.color("yellow")
pen.right(90)
pen.forward(100)
pen.left(90)
pen.forward(200)
pen.right(90)
pen.forward(100)
# fa partire il loop della turtle
# fino a che non viene chiusa la finestra
screen.mainloop()