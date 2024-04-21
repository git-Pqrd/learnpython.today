import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const stringsGames : Game[] = [
    new GameBuilder()
    .setTitle("How to declare a string")
    .setHref("string-1")
    .setTags([kt.syntax])
    .setSynopsis("Find how to declare a simple string. And how not to!")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
        new CodeBlock(
            [
                new CodeLine( "string_to_return = One Of Those Lines,", StateEnum.ERROR, "Remember to enclose strings in quotes."), // Missing quotes
                    new CodeLine( "string_to_return = 'One Of Those Lines,'", StateEnum.CORRECT, "Exactly! Single quotes work as well.", 10),
                    new CodeLine( "string_to_return = 'One Of Those Lines,\"", StateEnum.WRONG, "In Python we can't mix single and double quotes!", 10),
                    new CodeLine('string_to_return = "Is Not Correct"'),
                    new CodeLine("string_to_return = 'Please Find Which One'"),
            ],
                "python",
        )
    )
    .setText(
        `Explore the snippets below and identify the correct way to declare a string in Python.
         Pay close attention to the use of quotes and look out for common syntactical errors.
         Select the line that correctly represents a string declaration without errors`)
    .build(),

    new GameBuilder()
    .setTitle("How to declare a string II")
    .setHref("string-2")
    .setTags([kt.syntax])
    .setSynopsis("A slightly hard version of the string I.")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setText("Someone made a mistake in the syntax find it and pick the correct answer.")
    .setCodeBlock(new CodeBlock(
        [
            new CodeLine( "### Complete the function to correctly return a formatted greeting"),
            new CodeLine("def format_greeting(name):"),
            new CodeLine( "    greeting = 'Hello, ' + name + ', welcome to the game!'", StateEnum.WRONG),
            new CodeLine("    greeting = 'Hello, ' + name + ', welcome to the game!'\"", StateEnum.ERROR, "Watch out for mismatched quotes!", 10),
            new CodeLine("    greeting = f'Hello, {name}, welcome to the game!'", StateEnum.CORRECT, "Well done! f-string is the right choice here.", 10),
            new CodeLine('    greeting = "Hello, {name}, welcome to the game!"', StateEnum.WRONG),
            new CodeLine("    return greeting"),
            new CodeLine('print(format_greeting("hello")'),
        ],
        "python",
    )).build(),
];
