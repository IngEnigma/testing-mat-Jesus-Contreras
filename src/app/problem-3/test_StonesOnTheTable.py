from StonesOnTheTable import contar_piedras

def test_1():
    assert contar_piedras(3, ['R', 'R', 'G']) == 1

def test_2():
    assert contar_piedras(5, ['R', 'R', 'R', 'R', 'R']) == 4

def test_3():
    assert contar_piedras(4, ['B', 'R', 'B', 'G']) == 0