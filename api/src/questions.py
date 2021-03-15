
field_to_question_dict = {
    'maxEvolutions': ['How many evolutions does your Pokémon have?', [1, 2, 3]]
}


def build_question(new_question_field):
    question_answer = field_to_question_dict[new_question_field]
    return question_answer[0], question_answer[1]


question, answer = build_question('maxEvolutions')
print(question)
print(answer)