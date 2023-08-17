import math


def paint_costs(area):
    required_cans = math.ceil((area / 3) / 18)
    return required_cans, required_cans * 80