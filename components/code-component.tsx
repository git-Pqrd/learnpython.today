"use client";

import { useMemo, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { games } from "@/config/games";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {
  CheckCircledIcon,
  Crosshair1Icon,
  Crosshair2Icon,
  CheckIcon,
  StopIcon,
  Cross2Icon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import { getDiscovered } from "@/utils/codeComponentUtils";
import { sortGamesByRef } from "@/utils/gamesUtils";
import { reviver } from "@/utils/codeComponentUtils";
import { useReward } from "react-rewards";
import { Button } from "@/components/ui/button";
import { Game } from "@/types/game";

export function CodeComponent(props: { game: Game }) {
  const [foundError, setFoundError] = useState(false);
  const [score, setScore] = useState(0);
  const [tried, setTried] = useState<CodeLine[]>([]);
  const [discovered, setDiscovered] = useState<CodeLine[]>([]);
  const [userSubHint, setUserSubHint] = useState(
    <>
      <Crosshair1Icon /> <span className="pl-1">Find the error</span>{" "}
    </>
  );
  // undefined nextHref will assign one if we find another game and if the players win.
  const [nextHref, setNextHref] = useState<string | undefined>();
  const { toast } = useToast();
  const { reward } = useReward("rewardId", "confetti", {
    elementCount: 150,
    angle: 35,
  });

  const codeBlock: CodeBlock = useMemo(
    () => JSON.parse(props.game.codeBlock, reviver),
    [props.game]
  );
  const defaultLines = codeBlock.codeLines.filter((cl) =>
    [StateEnum.NORMAL, StateEnum.ERROR].includes(cl.state)
  );

  const interact = (cl: CodeLine) => {
    // incrementing the counter and skipping if not first time guessed.
    if (tried.includes(cl)) return;
    setTried([...tried, cl]);

    if (cl.state == StateEnum.NORMAL) {
      toast({
        variant: "destructive",
        title: "That's not it. Give it another shot!",
        description: cl.hint ? cl.hint : "",
      });
    }
    if (cl.state == StateEnum.ERROR) {
      toast({
        title: "Good Job! That was it!",
        description: "Find the correct line in the given candidates",
      });
      setDiscovered([...discovered, ...getDiscovered(codeBlock, cl)]);
      setFoundError(true);
      setUserSubHint(
        <>
          <Crosshair2Icon />{" "}
          <span className="pl-1">
            Click on the line that fixes the problem.
          </span>{" "}
        </>
      );
    }
    if (cl.state == StateEnum.WRONG) {
      toast({
        variant: "destructive",
        title: "That's not the right answer. Keep trying!",
        description: cl.hint ? cl.hint : "",
      });
    }
    if (cl.state == StateEnum.CORRECT) {
      setScore(score + cl.score);
      // Next game in time or last created.
      setTimeout(
        () =>
          setNextHref(
            games
              .sort(sortGamesByRef)
              .filter((game) => game.ref < props.game.ref)[0]?.href ||
              games[0].href
          ),
        300
      );
      setUserSubHint(
        <>
          {" "}
          <CheckCircledIcon /> <span className="pl-1">Congrats!</span>{" "}
        </>
      );
      setFoundError(false);
      reward();
    }
  };

  //find out why not interactive anymore.
  return (
    <div id="rewardId">
      <div className="flex items-center font-bold text-muted-foreground text-green-500 text-xl pt-4">
        {userSubHint}
      </div>
      <div className="flex flex-col">
        {codeBlock.codeLines
          .filter((cl) => [...defaultLines, ...discovered].includes(cl))
          .map((cl: CodeLine, index: number) => {
            const isCandidate = [StateEnum.WRONG, StateEnum.CORRECT].includes(
              cl.state
            );
            // Creating the border to have the first one rounded on top
            // and last one on the bottom (both if it is the only one).
            let border = index == 0 ? "5px 5px " : "0 0 ";
            border +=
              index == [...defaultLines, ...discovered].length - 1
                ? "5px 5px "
                : "0 0 ";

            const CustomPre = (props: any) => {
              const cn = "absolute top-3 right-3 text-white";
              let icon = <StopIcon className={cn} />;
              if (
                tried.includes(cl) &&
                (cl.state == StateEnum.ERROR || StateEnum.CORRECT)
              ) {
                icon = <CheckIcon className={cn} />;
              }
              if (
                tried.includes(cl) &&
                (cl.state == StateEnum.WRONG || cl.state == StateEnum.NORMAL)
              ) {
                icon = <Cross2Icon className={cn} />;
              }

              return (
                <span
                  className={`relative group
                    ${isCandidate && "border-2 border-l-4 rounded border-green-500 cursor-cell"}
                    ${cl.state == StateEnum.NORMAL && foundError && "cursor-default blur-[0.8px] grayscale hover:translate-x-0"}
                    ${cl.state == StateEnum.ERROR && foundError && "cursor-default hover:translate-x-0"}
                  `}
                >
                  <span className={`
                  absolute bottom-0 top-0 left-0
                  opacity-0
                  group-hover:opacity-100
                  group-hover:translate-x-[-22px] transition ease-in-out`}>
                   {foundError ? "+" : "-"}
                  </span>
                  <pre {...props} /> {icon}{" "}
                </span>
              );
            };
            return (
              <SyntaxHighlighter
                key={index}
                style={theme}
                PreTag={CustomPre}
                customStyle={{
                  margin: "1px",
                  padding: "5px",
                  paddingLeft: "15px",
                  borderRadius: border,
                }}
                language={codeBlock.language}
                showLineNumbers={false}
                codeTagProps={{
                  className: "codeLine py-0 rounded-md",
                }}
                wrapLongLines={true}
                wrapLines={true}
                lineProps={() => {
                  return {
                    style: {
                      cursor: "pointer",
                      fontWeight: "bolder",
                      display: "block",
                    },
                    onClick() {
                      interact(cl);
                    },
                  };
                }}
              >
                {cl.content}
              </SyntaxHighlighter>
            );
          })}
      </div>
      <a
        href={`/games/${nextHref}`}
        className={score > 0 && nextHref ? "flex" : "hidden"}
      >
        <Button
          className="text-black mt-8 font-bold
                bg-gradient-to-r from-green-400 to-green-700"
        >
          Go To The Next Game <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </a>
    </div>
  );
}
