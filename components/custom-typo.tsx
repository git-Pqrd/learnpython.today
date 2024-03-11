import * as React from "react";
import { Section } from "@/types/section";

/** Custom H1 */
export function CH1(props: { text: string; id?: string }) {
  return (
    <h1
      id={props.id}
      className="bg-gradient-to-r from-green-400 to-green-700
      inline-block text-transparent bg-clip-text scroll-m-20
      text-4xl font-extrabold tracking-tight lg:text-5xl pb-2"
    >
      {props.text}
    </h1>
  );
}

/** Custom SubTitle */
export function SubTitle(props: { text: string; class?: string; id?: string }) {
  return (
    <p
      id={props.id}
      className={`capitalize font-bold text-xl text-muted-foreground mt-4 ${props.class}`}
    >
      {props.text}
    </p>
  );
}

/** Custom SectionTitle */
export function SectionTitle(props: { section?: Section; class?: string }) {
  if (props.section === undefined) return;
  return (
    <h3
      id={props.section.id}
      className={`capitalize mt-8 scroll-m-20 text-2xl font-bold tracking-tight mb-2 ${props.class}`}
    >
      &rarr; {props.section.title}
    </h3>
  );
}

/** Custom SectionSubTitle */
export function SectionSubTitle(props: { section?: Section; class?: string }) {
  if (props.section === undefined) return;
  return (
    <p
      id={props.section.id}
      className={`capitalize font-bold text-xl text-muted-foreground mt-3 ${props.class}`}
    >
      {props.section?.title}
    </p>
  );
}

export const boldPClasses =
  "leading-7 text-xl font-semibold tracking-tight text-wrap md:ml-8";

export const normalPClasses = "leading-7 text-xl tracking-tight text-wrap mt-4";
