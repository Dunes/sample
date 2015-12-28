from animal import Cat, Dog, Colour
from json import JSONEncoder, dumps

class AnimalEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Cat):
            d = {"type": "Cat"}
            d.update(vars(obj))
            return d
        elif isinstance(obj, Dog):
            d = {"type": "Dog"}
            d.update(vars(obj))
            return d
        elif isinstance(obj, Colour):
            return obj.name
        return super().default(obj)

