import turtle

# Configurazione dello schermo
screen = turtle.Screen()
screen.title("Stella")
screen.bgcolor("aqua")

# Configurazione della penna
pen = turtle.Turtle()
pen.shape("turtle")
pen.color("brown")
pen.speed(3)




for _ in range (4):
    pen.forward(200)
    pen.left(90)

pen.forward(200)
pen.left(90)
pen.forward(200)
pen.left(30)
pen.forward(200)
pen.left(120)
pen.forward(200)

pen.left(30)
pen.forward(200)
pen.left(90)
pen.forward(90)
pen.left(90)
pen.forward(50)
pen.right(90)
pen.forward(30)
pen.right(90)
pen.forward(50)

pen.left(90)
pen.forward(80)
pen.left(90)
pen.forward(160)
pen.penup()
pen.left(90)
pen.forward(30)
pen.pendown()

for _ in range (4):
    pen.forward(40)
    pen.left(90)
pen.penup()
pen.left(180)
pen.forward(30)
pen.left(90)
pen.forward(40)
pen.left(90)
pen.forward(200)
pen.left(90)
pen.forward(40)
pen.left(90)
pen.forward(30)
 
pen.pendown()
for _ in range (4):
    pen.forward(40)
    pen.right(90)

pen.circle(2)
pen.forward(30000)



screen.mainloop()
