class Person:
    def __init__(self, name: str, age: int, height: float) -> None:
        self.name = name
        self.age = age
        self.height = height

    def print_name_and_age(self) -> None:
        print(f"{self.name} tem {self.age} anos.")


alice = Person("Alice", 20, 1.61)
alice.print_name_and_age()
# Alice tem 20 anos.

john = Person("John", 28, 1.75)
john.print_name_and_age()
# John tem 28 anos.
