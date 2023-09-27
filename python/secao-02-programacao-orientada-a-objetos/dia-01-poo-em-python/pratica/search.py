from typing import List


def searchList(list: List[str], char: str) -> List[str]:
    result = []
    for word in list:
        if word.startswith(char):
            result.append(word)
    return result


animals = ["cachorro", "gato", "elefante", "girafa"]
char = "g"

print(searchList(animals, char))  # result = ["gato", "girafa"]
