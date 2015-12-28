from enum import Enum

class Colour(Enum):
    WHITE = 0
    BROWN = 1
    BLACK = 2

class Animal:
    def __init__(self, name, age, colour):
        self.name = name
        self.age = age
        self.colour = colour
    
    def __repr__(self):
        return "{type}(name={name!r}, age={age!r}, colour={colour})".format(
            type=type(self).__name__, **vars(self))

class Cat(Animal):
    pass

class Dog(Animal):
    pass
