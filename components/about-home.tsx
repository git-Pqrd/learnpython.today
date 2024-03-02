import * as React from "react";

export function AboutHome() {
  return (
    <div className="text-lg py-12 ">
      <h2
        className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold
            tracking-tight transition-colors first:mt-0"
      >
        Hey there, I'm{" "}
        <a href="/about" className="font-bold underline">
          François!{" "}
        </a>{" "}
        👋
      </h2>
      <br />
      <p className="leading-7">
        I created this site because I understand that learning Python can often
        seem daunting.{" "}
        <b>This is my way of simplifying the process for everyone.</b>
        <br />
        My goal is for this blog to be your friendly guide in the Python world.
        It should help you cut through the clutter and focus on what truly
        matters.
      </p>

      <p className="leading-7 mt-3">
        I suggest beginning with the{" "}
        <a href="/blog/intro" className="font-bold underline">
          introductory article
        </a>
        , but feel free to explore other sections first if you prefer.
      </p>
    </div>
  );
}
