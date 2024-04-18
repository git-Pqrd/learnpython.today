import { Game } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { replacer } from "@/utils/codeComponentUtils";

export const gamesDict: { [key: string]: Game } = {
  introduction: {
    title: "Introduction",
    href: "introduction",
    tags: [kt.syntax],
    synopsis: "Get started with our games and find out how to play.",
    text: `To play the game, you need to put on your detective hat and find the lines of code to spot the bugs! Each game presents you with a snippet of code that contains an error. Your task is to identify the mistake and select the correct option from the provided choices that would fix the code.`,
    date: "04-07-2024",
    level: 0,
    disabled: false,
    extern: false,
    codeBlock: JSON.stringify(
      new CodeBlock(
        [
          new CodeLine("def hello(x):"),
          new CodeLine("  Print(x)", StateEnum.ERROR),
          new CodeLine("  print(x)", StateEnum.CORRECT, "Good Catch!", 10),
          new CodeLine("  print x", StateEnum.WRONG),
          new CodeLine("  Print x", StateEnum.WRONG),
        ],
        "python"
      ),
      replacer,
      2
    ),
  },
  easy_string: {
    title: "How to declare a string",
    href: "string-1",
    tags: [kt.syntax],
    synopsis: "Find how to declare a simple string. And how not to!",
    date: "04-01-2024",
    level: 0,
    disabled: false,
    extern: false,
    codeBlock: JSON.stringify(
      new CodeBlock(
        [
          new CodeLine( "string_to_return = One Of Those Lines,", StateEnum.ERROR, "Remember to enclose strings in quotes."), // Missing quotes
          new CodeLine( "string_to_return = 'One Of Those Lines,'", StateEnum.CORRECT, "Exactly! Single quotes work as well.", 10),
          new CodeLine( "string_to_return = 'One Of Those Lines,\"", StateEnum.WRONG, "In Python we can't mix single and double quotes!", 10),
          new CodeLine('string_to_return = "Is Not Correct"'),
          new CodeLine('string_to_return = \'Please Find Which One\''),
        ],
        "python"
      )
    ),
    text: "Explore the snippets below and identify the correct way to declare a string in Python. Pay close attention to the use of quotes and look out for common syntactical errors. Select the line that correctly represents a string declaration without errors",
  },
  easy_2_string: {
    title: "How to declare a string II",
    href: "string-2",
    tags: [kt.syntax],
    synopsis: "A slightly hard version of the string I.",
    date: "04-01-2024",
    level: 0,
    disabled: false,
    extern: false,
    codeBlock: JSON.stringify(
      new CodeBlock(
        [
          new CodeLine( "### Complete the function to correctly return a formatted greeting"),
          new CodeLine("def format_greeting(name):"),
          new CodeLine( "    greeting = 'Hello, ' + name + ', welcome to the game!'", StateEnum.WRONG),
          new CodeLine( "    greeting = 'Hello, ' + name + ', welcome to the game!'\"", StateEnum.ERROR, "Watch out for mismatched quotes!", 10),
          new CodeLine( "    greeting = f'Hello, {name}, welcome to the game!'", StateEnum.CORRECT, "Well done! f-string is the right choice here.", 10),
          new CodeLine( '    greeting = "Hello, {name}, welcome to the game!"', StateEnum.WRONG),
          new CodeLine("    return greeting"),
          new CodeLine('print(format_greeting("hello")'),
          new CodeLine("###"),
        ],
        "python"
      )
    ),
    text: "Someone made a mistake in the syntax find it and pick the correct answer.",
  },
  data_structures_complex: {
    title: "Lists and Dictionaries",
    href: "data-structures-medium",
    tags: [kt.syntax, kt.ds],
    synopsis:
      "Master Python's lists and dictionaries by identifying and correcting a critical error.",
    date: "04-01-2024",
    level: 2,
    disabled: false,
    extern: false,
    codeBlock: JSON.stringify(
      new CodeBlock(
        [
          new CodeLine( "items = [1, 2, 3, 4]", StateEnum.NORMAL, "Initialization of a list with integers."),
          new CodeLine( "settings = {'volume': 70, 'brightness': 50}", StateEnum.NORMAL, "Initialization of a dictionary with two keys."),
          new CodeLine( "print(settings['brightness'])", StateEnum.NORMAL, "Prints the value associated with the 'brightness' key."),
          new CodeLine( "items.append(5)", StateEnum.NORMAL, "Appends 5 to the end of the list 'items'."),
          new CodeLine( "settings['color'] = 'blue'", StateEnum.NORMAL, "Adds a new key 'color' with value 'blue' to 'settings'."),
          new CodeLine( "print(items)", StateEnum.NORMAL, "Prints the current list of items."),
          new CodeLine( "items[5] = 6", StateEnum.ERROR, "Attempts to assign a value at index 5, which is out of range."),
          new CodeLine( "items.insert(5, 6)", StateEnum.CORRECT, "Correctly inserts 6 at index 5 of the list.", 10),
          new CodeLine( "items.insert(6, 5)", StateEnum.WRONG, "Inserts 5 at index 6, which is incorrect as index 5 is the target."),
          new CodeLine( "items[5] == 6", StateEnum.WRONG, "Uses comparison '==' instead of assignment '='. Assignment vs. Comparison."),
          new CodeLine( "items.append(6, 5)", StateEnum.WRONG, "Incorrectly uses append with two arguments. Append takes one. Method usage error."),
          new CodeLine( "items[4] = 5", StateEnum.NORMAL, "Assigns the value 5 to the existing index 4 of the list."),
          new CodeLine( "if 'color' in settings: print(settings['color'])", StateEnum.NORMAL, "Conditional to check existence of 'color' and print it."),
          new CodeLine( "items.extend([7, 8])", StateEnum.NORMAL, "Extends the list by appending elements 7 and 8."),
          new CodeLine( "print(settings.keys())", StateEnum.NORMAL, "Prints all keys in the 'settings' dictionary."),
          ], "python"),
      replacer,
      2
    ),
    text: "This game targets your understanding of list and dictionary operations in Python, focusing on correct item insertion and handling out-of-range errors. Each line includes hints to help you choose correctly.",
  },
  list_comprehensions_basics: {
    title: "Understanding List Comprehensions",
    href: "list-comprehensions-basics",
    tags: [kt.syntax, kt.lists],
    synopsis: "Identify the correct way to use list comprehensions for various operations.",
    date: "04-01-2024",
    level: 1,
    disabled: false,
    extern: false,
    codeBlock: JSON.stringify(new CodeBlock(
        [
            new CodeLine("numbers = [1, 2, 3, 4, 5]", StateEnum.NORMAL, "A simple list of integers."),
            new CodeLine("squares = [x**2 for x in numbers]", StateEnum.NORMAL, "Correct list comprehension for squaring numbers."),
            new CodeLine("squares = [x**2 for x in range(5)]", StateEnum.NORMAL, "Another correct form, iterating over a range."),
            new CodeLine("doubles = [x*2 for x in numbers]", StateEnum.NORMAL, "Doubles each element in numbers."),
            new CodeLine("inverted = [1/x for x in numbers]", StateEnum.NORMAL, "Creates a list of inverses; potential division by zero."),
            new CodeLine("evens = [x for x in numbers if x%2 == 0]", StateEnum.ERROR, "Missing conditional for filtering even numbers."),
            new CodeLine("evens = [x for x in numbers if x%2 == 0]", StateEnum.CORRECT, "Correctly filters even numbers from the list.", 10),
            new CodeLine("evens = [x for x in range(5) if x%2]", StateEnum.WRONG, "Incorrect conditional logic; this collects odd numbers. Review modulus usage."),
            new CodeLine("evens = [x for x in numbers if x/2 == 0]", StateEnum.WRONG, "Division used instead of modulus; incorrect logic. Use modulus for remainders."),
            new CodeLine("evens = [x for x in numbers if not x%2]", StateEnum.NORMAL, "Collects even numbers, using not on the modulus result."),
        ],
        "python"
    ), replacer, 2),
    text: "This game focuses on list comprehensions. You are expected to identify and fix the incorrect use of list comprehensions for filtering and mapping operations.",
},
array_indexing_traps: {
    title: "Array Indexing Errors",
    href: "array-indexing-errors",
    tags: [kt.syntax, kt.lists],
    synopsis: "Spot and rectify common errors in array indexing.",
    date: "04-01-2024",
    level: 1,
    disabled: false,
    extern: false,
    codeBlock: JSON.stringify(new CodeBlock(
        [
            new CodeLine("data = [10, 20, 30, 40, 50]", StateEnum.NORMAL, "Initialization of a data list."),
            new CodeLine("middle_item = data[2]", StateEnum.NORMAL, "Correctly accesses the middle item of the list."),
            new CodeLine("last_item = data[-1]", StateEnum.NORMAL, "Accesses the last item using negative indexing."),
            new CodeLine("out_of_bounds = data[5]", StateEnum.ERROR, "Attempts to access index 5 which is out of bounds."),
            new CodeLine("out_of_bounds = data[-6]", StateEnum.WRONG, "Negative index out of bounds.Negative indexing starts from -1."),
            new CodeLine("first_item = data[0]", StateEnum.CORRECT, "Correctly accesses the first item.", 10),
            new CodeLine("slice = data[1:4]", StateEnum.NORMAL, "Correctly slices from index 1 to 3."),
            new CodeLine("reverse_slice = data[::-1]", StateEnum.NORMAL, "Correctly reverses the list using slicing."),
        ],
        "python"
    ), replacer, 2),
    text: "Test your ability to handle basic and tricky array indexing operations, including correct use and common mistakes.",
},


} as const;

export const games = Object.values(gamesDict).filter(
  (game: Game) => !game.disabled
);
