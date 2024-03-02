import Image from "next/image";
import { CH1 } from "@/components/custom-typo";

export default function About() {
  return (
    <div className="text-lg py-12 max-w-4xl ">
      <CH1 text={"Hi! I'm François, the creator of LearnPython.Today."} />
      <div className="flex items-end lg:ml-4 md:ml-2 py-3">
        <Image
          className="rounded-lg"
          src={"/me.png"}
          width={200}
          height={150}
          alt="Picture of the author"
        />
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-wrap">
          I got into coding because I wanted to{" "}
          <b>solve real-world problems.</b> This problem-solving-driven
          approach, in my opinion, is a great way to approach coding. Adopting
          this self-taught coder methodology has enabled me to tackle
          increasingly complex problems, eventually leading me to become a
          software engineer at Google.
        </p>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-wrap">
        <b>
          This blog is my attempt at sharing the lessons I've learned, aiming to
          simplify learning Python (and coding in general) for everyone.
        </b>{" "}
        Whether you're starting from zero or looking to advance, I'd like to
        help you through the world of coding, just as I navigated it myself.
        <br />
        <br />
        Having walked the self-taught path to becoming a software engineer, I
        understand that my learning method might not be the gold standard, but
        it's a path that has proven its worth for me. I share my experiences and
        insights with the hope that they can serve as a practical guide for
        others. My approach is really based in trial, error, and eventual
        success.
      </p>
    </div>
  );
}
