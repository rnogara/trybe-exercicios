def fuel_price(type, liters):
    priceA = 1.90
    priceG = 2.50
    if liters > 20 and type == 'A':
        return (priceA - (priceA * 0.05)) * liters
    elif liters <= 20 and type == 'A':
        return (priceA - (priceA * 0.03)) * liters
    elif liters > 20 and type == 'G':
        return (priceG - (priceG * 0.06)) * liters
    elif liters <= 20 and type == 'G':
        return (priceG - (priceG * 0.04)) * liters
