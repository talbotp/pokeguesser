from .pokemon_matrix import PokemonMatrix
from .questions import build_question
import json

pokemon_data = PokemonMatrix('data/pokemon.csv')


def handler(event, context):

    # qs_params = build_qs_params(event)

    # filtered_pokemon_map = filter_pokemon_map(qs_params, pokemon_map)
    #
    # next_question = choose_next_question(filtered_pokemon_map)

    # Choose the next field to split the data, for the next question.
    new_question_field = pokemon_data.get_splitter_field()

    print(new_question_field)

    print(new_question_field[1])

    question, answers = build_question(new_question_field[1])

    print(question)
    print(answers)

    return {
        'statusCode': 200,
        'headers': '',
        'body': json.dumps({
            'question': question,
            'answers': answers,
            'field': new_question_field[1],
        })
    }

