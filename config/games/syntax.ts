import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const syntaxGames: Game[] = [
    new GameBuilder()
    .setTitle("Easy Syntax")
    .setHref("easy_syntax")
    .setTags([kt.syntax])
    .setSynopsis("Spot and rectify this easy to miss syntax errors.")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setText("An easy to miss error slipped in the syntax, find it and replace it with the fix!")
    .setCodeBlock(new CodeBlock([
            new CodeLine("number = 10", StateEnum.NORMAL, "This is correct"),
            new CodeLine("if number > 5", StateEnum.ERROR, "Great find something is missing there."),
            new CodeLine("if number > 5:", StateEnum.CORRECT, "That's correct, python has very few; but a lot of :", 10),
            new CodeLine("if number is > 5", StateEnum.WRONG, "Is is not needed here. Something else is missing."),
            new CodeLine("    print('Number is greater than 5.')", StateEnum.NORMAL, ""),
        ], "python"))
    .build(),
]
