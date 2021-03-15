import pandas as pd
from collections import Counter


class PokemonMatrix:

    def __init__(self, file_path):
        self.df = pd.read_csv(file_path, sep=',', header=0)     # DataFrame
        self.fields = self.df.columns.values

    def get_count_of_remaining_pokemon(self):
        """
        Invalid pokemon are removed from the matrix, so return the number of rows.
        """
        return self.df.shape[0]

    def remove_invalid_pokemon(self, field_values):
        """
        Remove pokemon that are no longer possible given fields to exclude by.
        """
        for pokemon_field in field_values:
            value = field_values[pokemon_field]
            self.df = self.df[self.df[pokemon_field] == value]

    def get_splitter_field(self):
        """
        Loop through the df, and check to see which fields give the most equal split, ie. if we ask
        a question, we want to eliminate as many possibilities as we can.
        """
        remaining_pokemon = self.get_count_of_remaining_pokemon()
        best_split = [100, None, None]
        for pokemon_field in self.fields:
            counter = Counter(self.df[pokemon_field])
            for key in counter:
                count = counter[key]
                split = (count / remaining_pokemon) * 100
                distance = abs(split - 50)
                if distance < best_split[0]:
                    best_split = [split, pokemon_field, key]
        return best_split


# mons = PokemonMatrix('../data/pokemon.csv')
# field = mons.get_splitter_field()
# print(field)
# print(mons.get_count_of_remaining_pokemon())

# mons = PokemonMatrix('../data/pokemon.csv')
# field_values = {'maxEvolutions': 1}
# mons.remove_invalid_pokemon(field_values)
# print(mons.df)
# field = mons.get_splitter_field()
# print(field)
# mons.remove_invalid_pokemon({'isFire': 0})
# print(mons.df)
# field = mons.get_splitter_field()
# print(field)