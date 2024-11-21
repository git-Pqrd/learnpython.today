import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const basicGames: Game[] = [
    new GameBuilder()
    .setTitle("Basic Variable Declaration in Python")
    .setHref("variable-declaration-1")
    .setTags([kt.syntax])
    .setSynopsis("Understand the correct syntax for declaring variables in Python.")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
        new CodeBlock(
            [
                new CodeLine("x = 10", StateEnum.NORMAL, ""),
                new CodeLine("y == 20", StateEnum.ERROR, "Using '==' instead of '=' for assignment does not work. This would only check for equality."),
                new CodeLine("y = 30", StateEnum.CORRECT, "Correct syntax for variable declaration.", 10),
                new CodeLine("y 40", StateEnum.WRONG, "Missing '=' in the variable declaration."),
                new CodeLine("c = 'World'", StateEnum.NORMAL, ""),
            ],
            "python",
        )
    )
    .setText(
        `Review the code snippets below to identify the correct and incorrect ways to declare variables in Python.
         Pay attention to the use of assignment operators and common mistakes in variable assignments.`)
    .build(),

    new GameBuilder()
    .setTitle("Variable Declaration in Python")
    .setHref("variable-declaration-2")
    .setTags([kt.syntax])
    .setSynopsis("Explore advanced scenarios in variable declaration in Python.")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
        new CodeBlock(
            [
                new CodeLine("a = None", StateEnum.NORMAL, "Correct use of None to initialize a variable."),
                new CodeLine("a = 30; b = 10", StateEnum.NORMAL, "Using semicolon for multiple statements on one line is valid, though not Pythonic."),
                new CodeLine("a, b = 30", StateEnum.ERROR, "Incorrect multiple assignment, requires a value for each variable."),
                new CodeLine("a, b, = 30", StateEnum.WRONG, "We have the same problem as above. Python requires a value for each variable."),
                new CodeLine("a, b = 10, 20", StateEnum.CORRECT, "Multiple assignment is correct and Pythonic."),
                new CodeLine("j = k = 90", StateEnum.NORMAL, "Chain assignment is valid in Python."),
            ],
            "python",
        )
    )
    .setText(
        `Review the code snippets to identify both correct and incorrect ways to declare and initialize variables.
         This example introduces more complex declarations, including type annotations, multiple assignments, and the use of None.
         Spot the nuanced syntax errors and recognize proper Pythonic practices.`)
    .build(),

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
                    new CodeLine("string_to_return = One Of Those Lines,", StateEnum.ERROR, "Remember to enclose strings in quotes."), // Missing quotes
                    new CodeLine("string_to_return = 'One Of Those Lines,'", StateEnum.CORRECT, "Exactly! Single quotes work as well.", 10),
                    new CodeLine("string_to_return = 'One Of Those Lines,\"", StateEnum.WRONG, "In Python we can't mix single and double quotes!", 10),
                    new CodeLine('string_to_return = "Is Not Correct"'),
                    new CodeLine("string_to_return = 'Please Find Which One'"),
                ],
                "python"
            )
        )
        .setText(
            `Explore the snippets below and identify the correct way to declare a string in Python.
            Pay close attention to the use of quotes and look out for common syntactical errors.
            Select the line that correctly represents a string declaration without errors`
        )
        .build(),

    new GameBuilder()
        .setTitle("How to declare a string II")
        .setHref("string-2")
        .setTags([kt.syntax])
        .setSynopsis("A slightly hard version of the string I.")
        .setLevel(1)
        .setDisabled(false)
        .setExtern(false)
        .setText(
            "Someone made a mistake in the syntax find it and pick the correct answer."
        )
        .setCodeBlock(
            new CodeBlock(
                [
                    new CodeLine("def format_greeting(name):"),
                    new CodeLine("    greeting = 'Hello, ' + name + ', welcome to the game!'", StateEnum.WRONG),
                    new CodeLine("    greeting = 'Hello, ' + name + ', welcome to the game!'\"", StateEnum.ERROR, "Watch out for mismatched quotes!", 10),
                    new CodeLine("    greeting = f'Hello, {name}, welcome to the game!'", StateEnum.CORRECT, "Well done! f-string is the right choice here.", 10),
                    new CodeLine('    greeting = "Hello, {name}, welcome to the game!"', StateEnum.WRONG),
                    new CodeLine("    return greeting"),
                    new CodeLine('print(format_greeting("hello")'),
                ],
                "python"
            )
        )
        .build(),

    new GameBuilder()
        .setTitle("Using a for loop")
        .setHref("loop-1")
        .setTags([kt.basics, kt.lists])
        .setSynopsis(
            "Learn how to use for loops to iterate over a range in Python."
        )
        .setLevel(1)
        .setDisabled(false)
        .setExtern(false)
        .setCodeBlock(
            new CodeBlock(
                [
                    new CodeLine(
                        "def loop_though(x):",
                        StateEnum.ERROR,
                        "Remember to include parentheses in 'range()'."
                    ),
                    new CodeLine(
                        "  for i in range[x]: print(i)",
                        StateEnum.ERROR,
                        "Remember to include parentheses in 'range()'."
                    ),
                    new CodeLine(
                        "  for i in range(x): print(i)",
                        StateEnum.CORRECT,
                        "Correct syntax for a for loop."
                    ),
                    new CodeLine(
                        "  for i in range(x) print[i]",
                        StateEnum.WRONG,
                        "Don't forget the colon after the range."
                    ),
                    new CodeLine(
                        "  for i in range[x]: print [i]",
                        StateEnum.WRONG,
                        "In Python 3, 'print' must be used as a function."
                    ),
                    new CodeLine(
                        "  for i in x: print(i)",
                        StateEnum.WRONG,
                        "Incorrect; 'range' should be used with 'for'."
                    ),
                ],
                "python"
            )
        )
        .setText(
            `Explore how to use for loops correctly. Identify the right syntax and understand common errors in loop construction.`
        )
        .build(),
    new GameBuilder()
        .setTitle("Appending to a List in Python")
        .setHref("list-append-1")
        .setTags([kt.lists])
        .setSynopsis("Identify the correct way to append elements to a list.")
        .setLevel(1)
        .setDisabled(false)
        .setExtern(false)
        .setCodeBlock(
            new CodeBlock(
                [
                    new CodeLine("my_list = []", StateEnum.NORMAL, ""),
                    new CodeLine("for i in range(5):", StateEnum.NORMAL, ""),
                    new CodeLine("  my_list(append(i))", StateEnum.ERROR, ""),
                    new CodeLine("  my_list_append(i)", StateEnum.WRONG, "That is not how to append."),
                    new CodeLine("  my_list.append(i)", StateEnum.CORRECT, "Correctly appends i to the list after the loop."),
                    new CodeLine("  my_list.append[i]", StateEnum.WRONG, "Incorrect use of brackets instead of parentheses for the append method."),
                    new CodeLine("  my_list += i", StateEnum.WRONG, "This won't work. [i] would have been correct."),
                    new CodeLine("return my_list", StateEnum.NORMAL, ""),
                ],
                "python"
            )
        )
        .setText(
            `Review the code intended to append elements to a list. Identify the line with the syntax error in the append method.
                                        Correctly appending items to a list is crucial for list manipulations.`
        )
        .build(),
];
