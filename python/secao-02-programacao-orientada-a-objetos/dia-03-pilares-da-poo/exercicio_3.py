class Animal:
    def __init__(self, name: str) -> None:
        self.name = name

    def make_sound(self) -> None:
        print(f"{self.name} fazendo som")


class Mammal(Animal):
    def breastfeed(self) -> None:
        print(f"{self.name} amamentando")


class Dog(Mammal):
    def bark(self) -> None:
        print('Au au!')


dog = Dog("Tina")
dog.make_sound()  # Tina fazendo som
dog.breastfeed()  # Tina amamentando
dog.bark()  # Tina faz au au!
