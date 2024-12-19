import turtle

# Configurazione dello schermo
screen = turtle.Screen()
screen.title("Stella")
screen.bgcolor("white")

# Configurazione della penna
pen = turtle.Turtle()
pen.shape("turtle")
pen.color("black")
pen.speed(6)


pen.penup()

pen.left(180)
pen.forward(300)
pen.left(270)
pen.pendown()

pen.forward(60)
pen.right(90)
pen.circle(40,
           extent=180)
pen.left(90)
pen.forward(140)


pen.penup()
pen.left(90)
pen.forward(100)
pen.pendown()
pen.circle(55)

pen.penup()
pen.forward(100)
pen.pendown()
pen.left(90)
pen.forward(60)
pen.right(90)
pen.circle(40,
           extent=180)
pen.left(90)
pen.forward(75)
pen.left(30)
pen.forward(70)
pen.penup()
pen.left(60)
pen.forward(100)

pen.pendown()

pen.circle(65,
           extent=-180)

pen.penup()
pen.left(90)
pen.forward(100)
pen.pendown()
pen.circle(55)














screen.mainloop()
