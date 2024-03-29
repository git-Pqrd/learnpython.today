import * as React from "react";
import Image from "next/image";
import { Article } from "@/types/article";
import { blogsDict } from "@/config/blogs";
import {
  CH1,
  SubTitle,
  SectionSubTitle,
  SectionTitle,
  boldPClasses,
} from "@/components/custom-typo";
import { Section } from "@/types/section";
import { Sidebar } from "@/components/sidebar-component";
import { CustomLink, LINK_TYPE } from "@/types/link";
import { LinkComponent } from "@/components/custom-link-component";

export default function BlogIntro() {
  const article: Article = blogsDict.tuto_for_basics;
  const introArticle: CustomLink = blogsDict.intro as CustomLink;
  const externalAFFNP: CustomLink = new CustomLink(
    "https://docs.quantifiedcode.com/python-anti-patterns/readability/asking_for_permission_instead_of_forgiveness_when_working_with_files.html",
    "ask for forgiveness rather than permission",
    true /* external */
  ); // TODO: Write about how to write pythonic code
  const yt8HardTruths: CustomLink = new CustomLink(
    "https://www.youtube.com/watch?v=NtfbWkxJTHw",
    "8 Hard truths of programming",
    true /* external */,
    LINK_TYPE.YOUTUBE_VIDEO
  );
  const learnToCodeBasics: CustomLink = new CustomLink(
    "https://www.youtube.com/watch?v=66tfvFeALBQ",
    "learn to code basic roadmap",
    true /* external */,
    LINK_TYPE.YOUTUBE_VIDEO
  );
  const codeCademyPython: CustomLink = new CustomLink(
    "https://www.codecademy.com/learn/learn-python-3",
    "CodeCademy Python",
    true /* external */
  );
  const ytBasicProgram: CustomLink = new CustomLink(
    "https://www.youtube.com/watch?v=zOjov-2OZ0E",
    "Basic programming concepts",
    true /* external */
  );
  const ytTooShorts: CustomLink = new CustomLink(
    "https://www.youtube.com/watch?v=fabelAs_m08",
    "Learn Python in 59.001 seconds",
    true /* external */,
    LINK_TYPE.YOUTUBE_VIDEO
  );
  const pythonForProgrammersCodeCademy: CustomLink = new CustomLink(
    "https://www.codecademy.com/learn/python-for-programmers",
    "Python for programmer",
    true /* external */
  );
  const pythonSyntaxVideo: CustomLink = new CustomLink(
    "https://www.youtube.com/watch?v=A2NnIWCYnMQ",
    "Python Syntax Quick",
    true /* external */,
    LINK_TYPE.YOUTUBE_VIDEO
  );

  return (
    <div className="my-8 md:px-2 lg:px-4  flex justify-between flex-row">
      <div className="max-w-4xl ">
        <CH1 text="Resources to get you started." />
        <SubTitle
          id={sections[0].id}
          class="mb-6"
          text="Clear the first step of your Python learning process in no time."
        />
        <div className="flex items-center md:items-center p-3 md:pd-8 flex-col md:flex-row bg-accent rounded-lg">
          <Image
            className="rounded-lg"
            src={"/lost-girl-in-book.png"}
            width={200}
            height={150}
            alt="Picture of the author"
          />
          <p className={boldPClasses} id={sections[1].id}>
            Diving into Python and not sure where to start? I've been there.
            There's a ton of stuff out there. Here are (in my opinion) some
            solid, free resources to help you out. All those are free and as a
            rule of thumb <u>you should never have to pay</u>. You can if you
            want ofc but everything is available for free online.
          </p>
        </div>
        <SectionTitle section={sections[0]} />
        <p>
          I will get started by saying that, as you might have read in my{" "}
          <LinkComponent link={introArticle} /> you can always go back and forth
          between the basics and more advanced topics. So if you feel the urge
          to get started on a project, go for it!
          <br />
          <br />
          And of course, you can skip the first section if you know already a
          programming language.
        </p>
        <SectionTitle section={sections[1]} />
        <SectionSubTitle section={sections[1]?.subsections?.[0]} />
        <p>
          The first thing you might want is a broad overview of what is ahead.
          Here is an amazing (and funny) video to get you started. It is called{" "}
          <LinkComponent link={learnToCodeBasics} /> by Fireship. I would
          recommend subscribing; he often posts relevant content (and other
          humorous stuff like the <LinkComponent link={yt8HardTruths} />
          ).
        </p>
        <SectionSubTitle section={sections[1]?.subsections?.[1]} />
        <p>
          Now that you have a short intro as to what you are getting into, a
          great structured (and more hands-on) start is{" "}
          <LinkComponent link={codeCademyPython} />, I started with the PY2
          version of it and the free version has all you need to get the basics
          down.
          <br />
          If you want to spend less than more than 20 hours on it, you can also
          watch this crash course on programming{" "}
          <LinkComponent link={ytBasicProgram} />, which is way more
          approachable at only 2 hours long.
        </p>
        <SectionTitle section={sections[2]} />
        <SectionSubTitle section={sections[2]?.subsections?.[0]} />
        If you have really no time to mess around, here is a video on how to{" "}
        <LinkComponent link={ytTooShorts} />, I doubt however that this will be
        enough so <LinkComponent link={pythonForProgrammersCodeCademy} /> will
        be great if you want something structured. <br />
        This should be enough if you want something quick (16mins):{" "}
        <LinkComponent link={pythonSyntaxVideo} />
        <SectionSubTitle section={sections[2]?.subsections?.[1]} />
        Python emphasizes simplicity and readability, meaining that you can
        expect to write less code with Python than you would with let's say
        JAVA.
        <br />
        Python's huge toolbox and awesome community make it super flexible,
        perfect for everything from building websites to data science and
        creating AI.
        <br />
        It comes however at the cost of speed as python is one of the slowest
        language around.
        <SectionTitle section={sections[3]} />
        When diving into Python's syntax, it's smart to zigzag between learning
        the ropes and tackling actual projects. This way, you're not just
        memorizing rules; you're applying them in real-world scenarios, which
        solidifies your understanding and skills.
      </div>
      <Sidebar article={article} sections={sections} />
    </div>
  );
}

const sections: Section[] = [
  {
    title: "You might not need everything.",
    id: "you-might-not-need",
  },
  {
    title: "If you are brand new.",
    subsections: [
      {
        id: "view-landscape",
        title: "A view of the landscape.",
      },
      {
        id: "how-to-code",
        title: "Complete basic tutorial.",
      },
    ],
    id: "brand-new",
  },
  {
    title: "If you are coming from another language.",
    subsections: [
      {
        id: "easy-syntax",
        title: "Quick video to learn the syntax.",
      },
      {
        id: "how-python-is-different",
        title: "How Python is different.",
      },
    ],
    id: "coming-from-another",
  },
  {
    title: "Conclusion",
    id: "conclusion",
  },
] as const;
