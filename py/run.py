from animal import Cat, Dog, Colour
from jsonencoder import dumps, AnimalEncoder

items = [
    Cat(name="Puss", age=5, colour=Colour.BLACK),
    Dog(name="Rex", age=14, colour=Colour.BROWN),
    Dog(name="Rover", age=2, colour=Colour.WHITE)
    ]

print(items)
print(dumps(items, cls=AnimalEncoder))
