import * as React from "react";

/** Custom H1 */
export function CH1(props: { text: string }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
      {props.text}
    </h1>
  );
}

/** Custom SubTitle */
export function SubTitle(props: { text: string; class?: string }) {
  return (
    <p
      className={`font-bold text-xl text-muted-foreground mt-4 ${props.class}`}
    >
      {props.text}
    </p>
  );
}