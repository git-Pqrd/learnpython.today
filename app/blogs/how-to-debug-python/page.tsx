import * as React from "react";
import Image from "next/image";
import { Article } from "@/types/article";
import { blogsDict } from "@/config/blogs";
import {
  CH1,
  SubTitle,
  SectionSubTitle,
  SectionTitle,
} from "@/components/custom-typo";
import { Section } from "@/types/section";
import { Sidebar } from "@/components/sidebar-component";
import { CustomLink, LINK_TYPE } from "@/types/link";
import { LinkComponent } from "@/components/custom-link-component";
import { CopyBlock, dracula } from "react-code-blocks";

export default function BlogIntro() {
  const article: Article = blogsDict.intro;
  const tutoralHellLink: CustomLink = blogsDict.tutorial_hell as CustomLink;
  const johnCarmack: CustomLink = new CustomLink(
    "https://en.wikipedia.org/wiki/John_Carmack",
    "John Carmack",
    true /* external */
  );
  const johnOnLex: CustomLink = new CustomLink(
    "https://www.youtube.com/watch?v=tzr7hRXcwkw&t=83s",
    "this podcast",
    true /* external */,
    LINK_TYPE.YOUTUBE_VIDEO
  );
  const pprintDoc: CustomLink = new CustomLink(
    "https://docs.python.org/3/library/pprint.html",
    "the data pretty printer",
    true /* external */
  );
  const pdbDoc: CustomLink = new CustomLink(
    "https://docs.python.org/3/library/pdb.html",
    "PDB",
    true /* external */
  );

  return (
    <div className="my-8 md:px-2 lg:px-4  flex justify-between flex-row">
      <div className="max-w-4xl ">
        <CH1 text="The Art of Debugging in Python" />
        <SubTitle class="mb-6" text="A Guide to Squashing Bugs Efficiently" />
        <Image
          className="rounded-lg"
          src={"/debugging_python.webp"}
          width={800}
          height={450}
          alt="How to debug python"
        />
        <SectionTitle section={sections[0]} />
        As you venture deeper into the realm of Python,{" "}
        <b>encountering bugs in your code is inevitable. </b>
        However, the difference between a frustrating coding session and a
        productive one often lies in how you approach debugging.
        <br />
        <br />
        But you might be asking what to do when you encounter a problem? Should
        you just think re-re-read the code? As{" "}
        <LinkComponent link={johnCarmack} /> said (in{" "}
        <LinkComponent link={johnOnLex} />)
        <blockquote className="mt-6 mb-6 max-w-[650px] border-l-2 pl-6 italic">
          Anybody that thinks just read the code and think about it... that's an
          insane statement. You can't even read all the code on big systems
          [...].
        </blockquote>
        And he is right. Debugging is not just about fixing errors, it is also
        about understanding your code better by going line by line through it.
        In this article, we'll explore some tools you can use to make debugging
        in Python not only effective but also (((somewhat))) enjoyable.
        <SectionTitle section={sections[1]} />
        <SectionSubTitle section={sections[1]?.subsections?.[0]} />
        When Python encounters an error, it throws an exception and prints a
        stack trace, which is essentially a map that shows you where things went
        wrong. Initially, stack traces might seem daunting with their cryptic
        messages and lines of code. However, learning to decipher stack traces
        is like learning to read a treasure map. Start from the bottom and trace
        your way back to the line in your code where the error originated.
        <SectionSubTitle section={sections[1]?.subsections?.[1]} />
        When faced with a complex bug, the best strategy is often to simplify
        and isolate.{" "}
        <b>
          Try to replicate the issue in a smaller, controlled environment.
        </b>{" "}
        This could mean writing a simpler version of your function or script
        that only focuses on the problematic part.
        <br />
        By isolating the bug, you not only make it easier to understand and fix
        but also minimize the variables and interactions that could be
        contributing to the problem.{" "}
        <SectionSubTitle section={sections[1]?.subsections?.[2]} />
        <SectionTitle section={sections[2]} />
        <SectionSubTitle section={sections[2]?.subsections?.[0]} />
        In all honesty, most of your quick debugging might be simply a print
        statement. While print statements can sometimes help you trace the flow
        of your program, relying solely on them is like navigating a dark cave
        with a flickering torch. You won't see much and if you are not lucky you
        will miss what you were looking for...
        <SectionSubTitle section={sections[2]?.subsections?.[1]} />A replacement
        for print would be pprint. Pprint is the{" "}
        <LinkComponent link={pprintDoc} />, in our analogy it would be a
        slightly better torch but still flickering! It just makes the output
        easier to understand (useful for long JSON objects).
        <SectionTitle section={sections[3]} />
        <SectionSubTitle section={sections[3]?.subsections?.[0]} />
        <blockquote className="mt-6 mb-6 border-l-2 pl-6 italic">
          tldr; A debugger is how you get a view into a system that's too
          complicated to understand.
        </blockquote>
        A debugger is a tool that helps to identify and fix bugs. It allows you
        to inspect variables, step through code line by line, set breakpoints to
        halt execution at certain points, and evaluate the program's state at
        various stages. We use it to understand how the program operates and
        where it deviates from expected behavior.{" "}
        <SectionSubTitle section={sections[3]?.subsections?.[1]} />
        Python's built-in debugger ( <LinkComponent link={pdbDoc} />) is a
        powerful tool that allows you to pause execution, inspect variables, and
        step through your code line by line. Familiarize yourself with pdb
        commands such as break, continue, list, and step. By mastering pdb, you
        turn the lights on in the cave, giving you a clear path to the source of
        the bug.
        <SectionTitle section={sections[4]} />
        Debugging is an essential skill for any Python programmer, and like
        everything else, it requires practice, patience, and a bit of
        creativity.
        <br /> And remember, coding is also solving bugs. And each bug you
        squash not only makes your code better but also makes you a more skilled
        and resilient programmer.
      </div>
      <Sidebar article={article} sections={sections} />
    </div>
  );
}

const sections: Section[] = [
  {
    title: "What and Why?",
    id: "why-debugging",
  },
  {
    title: "Get an idea of where the problem is.",
    id: "where_it_is",
    subsections: [
      {
        id: "isolate",
        title: "Simplify and Isolate",
      },
      {
        id: "stacktrace",
        title: "Understand the Stack Trace",
      },
    ],
  },
  {
    title: "Print, a basic way to Shed some light.",
    id: "tools",
    subsections: [
      {
        id: "print",
        title: "Good ol' print statement",
      },
      {
        id: "pprint",
        title: "A better print",
      },
    ],
  },
  {
    title: "PDB, the better approach",
    id: "tools",
    subsections: [
      {
        id: "what",
        title: "What is a debugger",
      },
      {
        id: "pdb",
        title: "PDB or Python DeBugger",
      },
    ],
  },
  {
    title: "Conclusion",
    id: "conclusion",
  },
] as const;
