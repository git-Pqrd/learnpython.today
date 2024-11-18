import * as React from "react";
import Image from "next/image";
import ClientSideContent from "@/components/game-score";
import { games } from "@/config/games";
import { blogs } from "@/config/blogs";

export function AboutHome() {
  return (
    <div className="text-lg py-12 flex flex-col px-2">
      <div>
      <Image
        className="rounded-lg bottom-0 right-0 hidden md:block"
        src={"/low-poly-bg.png"}
        width={250}
        height={250}
        alt="Picture of the author"
      />
      <div>
        <p className="leading-7 max-w-[1000px]">
          Explore 5-minute reads on our blog—your friendly guide in the Python
          world.
          <br />
          Simplify your learning and focus on what matters most.
        </p>

        <p className="leading-7 mt-3">
          I suggest beginning with the{" "}
          <a href="/blogs/intro" className="font-bold underline">
            introductory article
          </a>
          , but feel free to explore other sections first if you prefer.
        </p>
      </div>
      </div>
      <ClientSideContent
        totalGames={games.length}
        totalArticles={blogs.length}
      />
    </div>
  );
}
