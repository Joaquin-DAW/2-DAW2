num1 = int(input("Por favor, introduzca un número: "))

num2 = int(input("Por favor, introduzca otro número: "))

def suma(a, b):
    sumar=a+b
    return sumar

def resta(a, b):
    restar=a-b
    return restar

def multiplicar(a, b):
    multiplicacion=a*b
    return multiplicacion

def dividir(a, b):
    division=a/b
    return division

result= suma(num1, num2)
print("El resultado de la suma es "+str(result))

result= resta(num1, num2)
print("El resultado de la resta es "+str(result))

result= multiplicar(num1, num2)
print("El resultado de la multiplicación es "+str(result))

result= dividir(num1, num2)
print("El resultado de la división es "+str(result))