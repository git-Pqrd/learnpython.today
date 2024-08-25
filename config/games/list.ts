import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const listGames: Game[] = [
    new GameBuilder()
        .setTitle("List Comprehension in Python")
        .setHref("list-comprehension")
        .setTags([kt.syntax, kt.lists])
        .setSynopsis("Master list comprehension syntax in Python.")
        .setLevel(2)
        .setDisabled(false)
        .setExtern(false)
        .setCodeBlock(
            new CodeBlock(
                [
                    new CodeLine("# Create a list of squares for even numbers from 0 to 9", StateEnum.NORMAL, ""),
                    new CodeLine("numbers = range(10)", StateEnum.NORMAL, ""),
                    new CodeLine("squares = [x**2 for x in numbers if x % 2 == 0]", StateEnum.NORMAL, ""),
                    new CodeLine("print(squares)", StateEnum.NORMAL, ""),
                    new CodeLine("# Now, let's try to create a list of cubes for odd numbers", StateEnum.NORMAL, ""),
                    new CodeLine("cubes = [x**3 for x in numbers if x % 2 = 1]", StateEnum.ERROR, "Single '=' used for comparison instead of '=='"),
                    new CodeLine("cubes = [x**3 for x in numbers if x % 2 == 1", StateEnum.WRONG, "Missing closing bracket"),
                    new CodeLine("cubes = [x**3 for x in numbers if x % 2 == 1]", StateEnum.CORRECT, "Correct list comprehension syntax", 10),
                    new CodeLine("cubes = [x**3 if x % 2 == 1 for x in numbers]", StateEnum.WRONG, "Incorrect order of 'if' and 'for' clauses"),
                    new CodeLine("cubes = (x**3 for x in numbers if x % 2 == 1)", StateEnum.WRONG, "Creates a generator expression, not a list comprehension"),
                    new CodeLine("print(cubes)", StateEnum.NORMAL, "")
                ],
                "python"
            )
        )
        .setText(
            `In this exercise, you'll work with list comprehensions in Python.
            Your task is to identify the line with a syntax error in the list comprehension and then select the correct implementation.
            Pay attention to the syntax of list comprehensions, including the order of operations and the use of comparison operators.`
        )
        .build(),

    new GameBuilder()
        .setTitle("Function Definition in Python")
        .setHref("function-definition")
        .setTags([kt.syntax, kt.functions])
        .setSynopsis("Learn the correct syntax for defining functions in Python.")
        .setLevel(1)
        .setDisabled(false)
        .setExtern(false)
        .setCodeBlock(
            new CodeBlock(
                [
                    new CodeLine("# Define a function to calculate the area of a rectangle", StateEnum.NORMAL, ""),
                    new CodeLine("def calculate_area(length, width):", StateEnum.NORMAL, ""),
                    new CodeLine("    return length * width", StateEnum.NORMAL, ""),
                    new CodeLine("print(calculate_area(5, 3))", StateEnum.NORMAL, ""),
                    new CodeLine("# Now, let's define a function to calculate the volume of a box", StateEnum.NORMAL, ""),
                    new CodeLine("def calculate_volume(length, width, height)", StateEnum.ERROR, "Missing colon at the end of the function definition"),
                    new CodeLine("def calculate_volume(length, width, height);", StateEnum.WRONG, "Semicolon used instead of colon"),
                    new CodeLine("def calculate_volume(length, width, height):", StateEnum.CORRECT, "Correct function definition syntax", 10),
                    new CodeLine("def calculate_volume(length, width, height) {", StateEnum.WRONG, "Incorrect use of curly braces"),
                    new CodeLine("calculate_volume = lambda length, width, height:", StateEnum.WRONG, "Incorrect lambda function syntax"),
                    new CodeLine("    return length * width * height", StateEnum.NORMAL, ""),
                    new CodeLine("print(calculate_volume(2, 3, 4))", StateEnum.NORMAL, "")
                ],
                "python"
            )
        )
        .setText(
            `In this exercise, you'll practice defining functions in Python.
            Your task is to identify the line with a syntax error in the function definition and then select the correct implementation.
            Pay attention to the syntax of function definitions, including the use of colons and indentation.`
        )
        .build(),

    new GameBuilder()
        .setTitle("Dictionary Manipulation in Python")
        .setHref("dictionary-manipulation")
        .setTags([kt.syntax, kt.dictionaries])
        .setSynopsis("Practice manipulating dictionaries in Python.")
        .setLevel(2)
        .setDisabled(false)
        .setExtern(false)
        .setCodeBlock(
            new CodeBlock(
                [
                    new CodeLine("# Create a dictionary of fruit prices", StateEnum.NORMAL, ""),
                    new CodeLine("fruit_prices = {'apple': 0.5, 'banana': 0.3, 'orange': 0.4}", StateEnum.NORMAL, ""),
                    new CodeLine("print(fruit_prices)", StateEnum.NORMAL, ""),
                    new CodeLine("# Now, let's add a new fruit to the dictionary", StateEnum.NORMAL, ""),
                    new CodeLine("fruit_prices{'grape'} = 0.8", StateEnum.ERROR, "Incorrect syntax for adding a new key-value pair"),
                    new CodeLine("fruit_prices('grape') = 0.8", StateEnum.WRONG, "Parentheses used instead of square brackets"),
                    new CodeLine("fruit_prices['grape'] = 0.8", StateEnum.CORRECT, "Correct syntax for adding a new key-value pair", 10),
                    new CodeLine("fruit_prices.append('grape': 0.8)", StateEnum.WRONG, "Incorrect use of append method (which is for lists, not dictionaries)"),
                    new CodeLine("fruit_prices.add('grape', 0.8)", StateEnum.WRONG, "Incorrect use of non-existent add method"),
                    new CodeLine("print(fruit_prices)", StateEnum.NORMAL, ""),
                    new CodeLine("# Let's update the price of apples", StateEnum.NORMAL, ""),
                    new CodeLine("fruit_prices['apple'] = 0.6", StateEnum.NORMAL, ""),
                    new CodeLine("print(fruit_prices)", StateEnum.NORMAL, "")
                ],
                "python"
            )
        )
        .setText(
            `In this exercise, you'll practice manipulating dictionaries in Python.
            Your task is to identify the line with a syntax error when adding a new key-value pair to the dictionary, and then select the correct implementation.
            Pay attention to the syntax for accessing and modifying dictionary elements.`
        )
        .build()
];
