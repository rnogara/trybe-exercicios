class Blender:
    def __init__(
        self, color: str, power: int, voltage: int, price: float | int
    ) -> None:
        # Adiciona o valor do parâmetro `color`
        # a um atributo de mesmo nome (homônimo)
        # do objeto que está sendo criado (`self.color`).
        self.color = color
        self.price = price
        self.power = power
        self.voltage = voltage

        # Valores _hard coded_
        self.is_on = False
        self.speed = 0
        self.max_speed = 3
        self.actual_electric_current = 0


# Agora, podemos criar nossos primeiros liquidificadores.
# Os argumentos nos parênteses são passados para o `__init__`
my_blender = Blender("Azul", 200, 127, 200)
your_blender = Blender(
    color="Vermelho",
    power=250,
    voltage=220,
    price=100,
)
