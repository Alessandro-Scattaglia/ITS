a = [1,2,3]
b = a
b.append(666)
print(a)



x = 10
y = x
print(id(x),id(y))


a = [[1,2], [3,666]]

b=a[:]
print(id(a),id(b))