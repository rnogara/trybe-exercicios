class Car:
    def __init__(self, brand: str, model: str, year: int, color: str) -> None:
        self.brand = brand
        self.model = model
        self.year = year
        self.color = color

        def identify(self):
            print(
                f"Meu carro é um {self.model}, da {self.brand}. "
                f"Ele é do ano {self.year} e tem a cor {self.color}."
            )


car = Car()

car.brand = "Fiat"
car.model = "Uno"
car.year = 2010
car.color = "vermelha"
car.identify()
# Meu carro é um Uno, da Fiat. Ele é do ano 2010 e tem a cor vermelha.
