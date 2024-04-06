"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CheckIcon, StopIcon, Cross2Icon } from "@radix-ui/react-icons";
import { getDiscovered } from "@/utils/codeComponentUtils";

export function CodeComponent(props: { codeBlock: CodeBlock }) {
  const [tried, setTried] = useState<CodeLine[]>([]);
  const [discovered, setDiscovered] = useState<CodeLine[]>([]);
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

    }
  };

  return (
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
              <span className={`relative ${isCandidate && "ml-3"} `}>
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
  );
}
