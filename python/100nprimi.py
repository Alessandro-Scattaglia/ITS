def isprime(n):
    
        if n < 2:
            return False
        else:   
            for i in range(2, n):
                if n % i == 0:
                    return True
                    break
            else:
                print(n)


i=0
for i in range(2,101):
    if isprime(i) ==True:
     isprime(i)
