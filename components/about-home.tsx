import * as React from "react";
import Image from "next/image";

export function AboutHome() {
  return (
    <div className="text-lg py-12 flex px-2">
      <Image
        className="rounded-lg bottom-0 right-0 hidden md:block"
        src={"/low-poly-bg.png"}
        width={250}
        height={250}
        alt="Picture of the author"
      />
      <div>
        <p className="leading-7 max-w-[1000px]">
          Hey, I'm{" "}
          <a href="/about" className="font-bold underline">
            François!{" "}
          </a>{" "}
          👋
          <br />I created this site because I understand that learning Python
          can often seem daunting. This is my way of simplifying the process for
          everyone.
          <br />
          My goal is for this blog to be your friendly guide in the Python
          world.
          <b> All articles aim to be 5mins or less</b> and they
          should help you cut through the clutter and focus on what truly
          matters.
        </p>

        <p className="leading-7 mt-3">
          I suggest beginning with the{" "}
          <a href="/blog/intro" className="font-bold underline">
            introductory article
          </a>, but feel free to explore other sections first if you prefer.
        </p>
      </div>
    </div>
  );
}
