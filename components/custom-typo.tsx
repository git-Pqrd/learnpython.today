import * as React from "react";

/** Custom H1 */
export function CH1(props: { text: string }) {
  return (
    <h1
      className="bg-gradient-to-r from-green-400 to-green-700
      inline-block text-transparent bg-clip-text scroll-m-20
      text-4xl font-extrabold tracking-tight lg:text-5xl pb-2"
    >
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

export const boldPClasses =
  "leading-7 text-xl font-semibold tracking-tight text-wrap md:ml-8";

export const normalPClasses = "leading-7 text-xl tracking-tight text-wrap mt-4";
