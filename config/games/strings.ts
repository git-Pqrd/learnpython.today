import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const stringGames: Game[] = [
  new GameBuilder()
    .setTitle("String Formatting Syntax in Python")
    .setHref("string-formatting-syntax")
    .setTags([kt.syntax, kt.strings])
    .setSynopsis(
      "Identify and correct syntax errors in Python string formatting."
    )
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "def format_user_info(name, age, city):",
            StateEnum.NORMAL,
            ""
          ),
          new CodeLine("    # Format user information", StateEnum.NORMAL, ""),
          new CodeLine(
            "    user_info = 'Name: %s, Age: %d, City: %s' % (name, age, city)",
            StateEnum.NORMAL,
            ""
          ),
          new CodeLine("    print(user_info)", StateEnum.NORMAL, ""),
          new CodeLine("    # Using f-string", StateEnum.NORMAL, ""),
          new CodeLine(
            "    user_info = f'Name: {name}, Age: {age}, City: {city}'",
            StateEnum.NORMAL,
            ""
          ),
          new CodeLine("    print(user_info)", StateEnum.NORMAL, ""),
          new CodeLine("    # Attempt to use .format()", StateEnum.NORMAL, ""),
          new CodeLine(
            "    user_info = 'Name: {0}, Age: {1}, City: {2}'.format{name, age, city}",
            StateEnum.ERROR,
            "Incorrect use of curly braces instead of parentheses for .format()"
          ),
          new CodeLine(
            "    user_info = 'Name: {0}, Age: {1}, City: {2}'.format[name, age, city]",
            StateEnum.WRONG,
            "Incorrect use of square brackets instead of parentheses"
          ),
          new CodeLine(
            "    user_info = 'Name: {0}, Age: {1}, City: {2}'.format(name, age, city)",
            StateEnum.CORRECT,
            "Correct usage of .format() method",
            10
          ),
          new CodeLine(
            "    user_info = 'Name: {}, Age: {}, City: {}'.format(name age city)",
            StateEnum.WRONG,
            "Missing commas between arguments in .format()"
          ),
          new CodeLine(
            "    user_info = 'Name: (0), Age: (1), City: (2)'.format(name, age, city)",
            StateEnum.WRONG,
            "Incorrect use of parentheses instead of curly braces for placeholders"
          ),
          new CodeLine("    print(user_info)", StateEnum.NORMAL, ""),
          new CodeLine("# Test the function", StateEnum.NORMAL, ""),
          new CodeLine(
            "format_user_info('Alice', 30, 'New York')",
            StateEnum.NORMAL,
            ""
          ),
        ],
        "python"
      )
    )
    .setText(
      `In this exercise, you'll encounter different string formatting techniques in Python.
        Your task is to identify the line with a syntax error in string formatting and then select the correct implementation.
        Pay close attention to the syntax of the .format() method, focusing on parentheses, curly braces, and argument separation.
        Remember, we're looking for actual syntax errors, not just suboptimal code.`
    )
    .build(),
];
