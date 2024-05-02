import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const syntaxGames: Game[] = [
    new GameBuilder()
    .setTitle("Variable Assignment with Type Annotations")
    .setHref("variable-assignment-typing-1")
    .setTags([kt.typing, kt.syntax])
    .setSynopsis("Learn the correct usage of type annotations in variable assignments.")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
        new CodeBlock(
            [
                new CodeLine("def sum():"),
                new CodeLine("  a: int = 10", StateEnum.NORMAL, "Correct type annotation for an integer."),
                new CodeLine("  b: float = '12.34'", StateEnum.ERROR, "Mismatch between type hint (float) and assigned string."),
                new CodeLine("  b: int = 12", StateEnum.CORRECT, "Proper use of type hint with a list of integers.", 20),
                new CodeLine("  b: int = 12.34", StateEnum.WRONG, "Incorrect type hint, assigning a float to an int."),
                new CodeLine("  b: int = '12.34'", StateEnum.WRONG, "Type mismatch, casting a string to int, then incorrectly assigning to float."),
                new CodeLine("  return a + b", StateEnum.NORMAL, "return can be untyped."),
            ],
            "python",
        )
    )
    .setText(
        `This exercise focuses on understanding type annotations in variable assignments.
        Review the given code lines for correct and incorrect uses of type hints according to Python's typing system.
        Determine the errors in type assignments and recognize properly annotated variables.`)
    .build(),

    new GameBuilder()
    .setTitle("Calculate Shopping Cart Total")
    .setHref("shopping-cart-calculation-1")
    .setTags([kt.functions, kt.syntax])
    .setSynopsis("Understand complex variable assignment and function logic in a shopping cart calculation.")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
        new CodeBlock(
            [
                new CodeLine("from typing import List, Tuple", StateEnum.NORMAL, ""),
                new CodeLine("def calculate_total(items: List[Tuple[str, float, int]], tax_rate: float, discount: float) -> float:", StateEnum.NORMAL, ""),
                new CodeLine("    total: float = 0.0", StateEnum.NORMAL, "Initializes the total cost."),
                new CodeLine("    for item_name, price, quantity in items:", StateEnum.NORMAL, ""),
                new CodeLine("        item_total = price * quantity", StateEnum.NORMAL, ""),
                new CodeLine("        total += item_total", StateEnum.NORMAL, ""),
                new CodeLine("    if discount > 0:", StateEnum.NORMAL, ""),
                new CodeLine("        total -= total * (discount / 100)", StateEnum.NORMAL, ""),
                new CodeLine("    return", StateEnum.ERROR, "We are not returning anything here."),
                new CodeLine("    return(total)", StateEnum.WRONG, "You should not call return"),
                new CodeLine("    return total", StateEnum.CORRECT, "Returning the total", 10),
                new CodeLine("    Return(total)", StateEnum.WRONG, "Returning is not a python statement.",),
                new CodeLine("    Return total", StateEnum.WRONG, "Returning is not a python statement.",),
                new CodeLine("cart_items = [('Book', 15.99, 2), ('Pen', 1.50, 5)]", StateEnum.NORMAL, ""),
                new CodeLine("print(calculate_total(cart_items, 5, 10))", StateEnum.NORMAL, ""),
            ],
            "python",
        )
    )
    .setText(
        `This code snippet involves a function to calculate the total cost of items in a shopping cart, including tax and discounts.
        Analyze the function for logic errors and correct type annotations in a real-world e-commerce scenario.
        Identify the lines with logical and syntactical errors in the context of a typical shopping cart calculation.`)
    .build(),

]
