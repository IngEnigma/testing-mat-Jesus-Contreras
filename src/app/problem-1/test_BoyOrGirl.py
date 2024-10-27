from BoyOrGirl import chat_decision

def test_1():
    assert chat_decision("wjmzbmr") == "CHAT WITH HER!"

def test_2():
    assert chat_decision("xiaodao") == "IGNORE HIM!"

def test_3():
    assert chat_decision("sevenkplus") == "CHAT WITH HER!"