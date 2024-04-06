"use client";

import { useState } from "react";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CheckIcon, StopIcon, Cross2Icon } from "@radix-ui/react-icons";

export function CodeComponent(props: { codeBlock: CodeBlock }) {
  if (!props.codeBlock) return;

  const codeLines: CodeLine[] = props.codeBlock.codeLines.filter((cl) =>
    [StateEnum.NORMAL, StateEnum.ERROR].includes(cl.state)
  );

  const [tried, setTried] = useState<CodeLine[]>([]);
  const interact = (cl: CodeLine) => {
    // incrementing the counter and skipping if not first time guessed.
    if (tried.includes(cl)) return;
    setTried([...tried, cl])

    if (cl.state == StateEnum.NORMAL) {
    }
    if (cl.state == StateEnum.ERROR) {
      alert("good job");
    }
    if (cl.state == StateEnum.WRONG) {
      alert("Wrong");
    }
    if (cl.state == StateEnum.CORRECT) {
      alert("Correct");
    }
  };

  return (
    <div className="flex flex-col pt-4">
      {codeLines.map((cl: CodeLine, index: number) => {
        // Creating the border to have the first one rounded on top
        // and last one on the bottom (both if it is the only one).
        let border = index == 0 ? "5px 5px " : "0 0 ";
        border += index == codeLines.length - 1 ? "5px 5px " : "0 0 ";

        const CustomPre = (props: any) => {
          let icon = <StopIcon className="absolute top-3 right-3 " />;
          if (tried.includes(cl) && cl.state == StateEnum.ERROR) {
            icon = <CheckIcon className="absolute top-3 right-3 " />;
          }
          if (tried.includes(cl) && cl.state == StateEnum.NORMAL) {
            icon = <Cross2Icon className="absolute top-3 right-3 " />;
          }
          return (
            <span className="relative">
              <pre style={{ margin: 0, padding: 0 }} {...props} />
              {icon}
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
              const bgColor =
                cl.state == StateEnum.WRONG
                  ? "rgba(27, 35, 168, 0.7)"
                  : "inherit";
              return {
                style: {
                  cursor: "pointer",
                  fontWeight: "bolder",
                  backgroundColor: bgColor,
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
