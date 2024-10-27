def chat_decision(b):
    n = len(b)
    contador = 0

    for i in range(n):
        letras = 0
        for j in range(i):
            if b[i] == b[j]:
                letras = 1
        if letras == 0:
            contador += 1

    if contador % 2 == 0:
        return "CHAT WITH HER!"
    else:
        return "IGNORE HIM!"
    
#b = input()
#n = len(b)
#contador = 0

#for i in range(n):
#    letras = 0
#    for j in range(i):
#        if b[i] == b[j]:
#            letras = 1
#    if letras == 0:
#        contador += 1

#if contador % 2 == 0:
#    print("CHAT WITH HER!")
#else:
#    print("IGNORE HIM!")