from Magnets import contar_grupos_imanes

def test_1():
    assert contar_grupos_imanes(6, ['10', '10', '10', '01', '10', '10']) == 3

def test_2():
    assert contar_grupos_imanes(4, ['01', '01', '10', '10']) == 2