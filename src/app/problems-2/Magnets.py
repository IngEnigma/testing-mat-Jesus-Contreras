def contar_grupos_imanes(nimanes, arreglo):
    grupos_imanes = 0

    for i in range(nimanes - 1):
        if arreglo[i] != arreglo[i + 1]:
            grupos_imanes += 1

    grupos_imanes += 1 
    return grupos_imanes

#nimanes = int(input())
#arreglo = []

#for i in range(nimanes):
#    arreglo.append(input())

#grupos_imanes = 0

#for i in range(nimanes - 1):
#    if arreglo[i] != arreglo[i + 1]:
#        grupos_imanes += 1

#grupos_imanes += 1 
#print(grupos_imanes)