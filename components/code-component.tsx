"use client";

import { CodeBlock } from "@/types/codeBlock";
import { StateEnum } from "@/types/codeline";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useTheme } from "next-themes";
import {
  atomDark,
  solarizedlight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

export function CodeComponent(props: { codeBlock: CodeBlock }) {
  if (!props.codeBlock) return;
  const { resolvedTheme } = useTheme();

  const codeLines = props.codeBlock.codeLines.filter((cl) =>
    [StateEnum.NORMAL, StateEnum.ERROR].includes(cl.state)
  );
  return (
    <SyntaxHighlighter
      language={props.codeBlock.language}
      style={resolvedTheme != "light" ? atomDark : solarizedlight}
      showLineNumbers={true}
      codeTagProps={{
        className: "codeLine",
      }}
      wrapLines={true}
      lineProps={(lineNumber: Number) => ({
        style: { cursor: "pointer" },
        onClick() {
          alert(`Line Number Clicked: ${lineNumber}`);
        },
      })}
    >
      {codeLines.map((cl) => cl.content).join(" \n")}
    </SyntaxHighlighter>
  );
}
