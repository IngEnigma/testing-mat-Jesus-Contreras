def contar_piedras(p, piedras):
    result = 0

    for i in range(p - 1):
        if piedras[i] == piedras[i + 1]:
            result += 1

    return result
