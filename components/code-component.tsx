"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { games } from "@/config/games";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  CheckIcon,
  StopIcon,
  Cross2Icon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import { getDiscovered, sortGamesByDate } from "@/utils/codeComponentUtils";

import { Button } from "@/components/ui/button";
import { Game } from "@/types/game";

export function CodeComponent(props: { codeBlock: CodeBlock; game: Game }) {
  const [score, setScore] = useState(0);
  const [tried, setTried] = useState<CodeLine[]>([]);
  const [discovered, setDiscovered] = useState<CodeLine[]>([]);
  // undefined nextHref will assign one if we find another game and if the players win.
  const [nextHref, setNextHref] = useState<string | undefined>();
  const defaultLines = props.codeBlock.codeLines.filter((cl) =>
    [StateEnum.NORMAL, StateEnum.ERROR].includes(cl.state)
  );

  const { toast } = useToast();

  if (!props.codeBlock) return;

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
      setDiscovered([...discovered, ...getDiscovered(props.codeBlock, cl)]);
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
      setNextHref(
        games
          .sort(sortGamesByDate)
          .filter((game) => game.date < props.game.date)[0]?.href ||
          games[0].href
      );

      console.log(nextHref);
    }
  };

  return (
    <div className="">
      <div className="flex flex-col pt-4">
        {props.codeBlock.codeLines
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
                  className={`relative ${isCandidate && "border-l-8 border-green-900"} `}
                >
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
                language={props.codeBlock.language}
                showLineNumbers={false}
                codeTagProps={{
                  className: "codeLine py-0 rounded-md",
                }}
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
        href={`${nextHref}`}
        className={score > 0 && nextHref ? "flex" : "hidden"}
      >
        <Button
          className="text-black mt-8 font-bold
                bg-gradient-to-r from-green-400 to-green-700"
        >
          Go To The Next Problem <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </a>
    </div>
  );
}
