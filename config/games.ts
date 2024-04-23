import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { stringsGames } from "@/config/games/strings";
import { syntaxGames } from "@/config/games/syntax";
import { basicGames } from "@/config/games/basics";
import { getRef } from "@/utils/gamesUtils";

export const allGames: Game[] = [
  new GameBuilder()
    .setTitle("Introduction")
    .setHref("introduction")
    .setTags([kt.syntax])
    .setSynopsis("Get started with our games and find out how to play.")
    .setText(
      "To play the game, you need to put on your detective hat and find the lines of code to spot the bugs! Each game presents you with a snippet of code that contains an error. Your task is to identify the mistake and select the correct option from the provided choices that would fix the code."
    )
    .setLevel(0)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def hello(x):"),
          new CodeLine("  Print(x)", StateEnum.ERROR),
          new CodeLine("  print(x)", StateEnum.CORRECT, "Good Catch!", 10),
          new CodeLine("  print x", StateEnum.WRONG),
          new CodeLine("  Print x", StateEnum.WRONG),
        ],
        "python"
      )
    )
    .build(),
  ...basicGames,
  ...stringsGames,
  ...syntaxGames,
];

export const games: Game[] = Object.values(allGames)
  .filter((game: Game) => !game.disabled)
  .map((game: Game) => {
    game.ref = game.ref < 0 ? game.ref : getRef(game);
    return game;
  });
