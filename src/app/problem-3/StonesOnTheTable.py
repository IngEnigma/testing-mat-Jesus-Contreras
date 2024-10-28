def contar_piedras(p, piedras):
    result = 0

    for i in range(p - 1):
        if piedras[i] == piedras[i + 1]:
            result += 1

    return result

#p = int(input())
#piedras = list(input())
#result = 0
#for i in range(1 , len(piedras)):
#    if piedras[i] == piedras[i-1] :
#       result+=1
#print(result)