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
import { CustomLink } from "@/types/link";
import { LinkComponent } from "@/components/custom-link-component";

export default function BlogIntro() {
  const article: Article = blogsDict.how_will_learning;
  const automateTheBoring: CustomLink = new CustomLink(
    "https://automatetheboringstuff.com/",
    "Automate The Boring Stuff",
    true /* external */
  ); // TODO: Write about how to write pythonic code
  const weWillNeedCoder: CustomLink = new CustomLink(
    "/blogs/we-will-still-need-coder",
    "About why we will still need people that can code.",
    false /* external */,
  );

  return (
    <div className="my-8 md:px-2 lg:px-4  flex justify-between flex-row">
      <div className="max-w-4xl ">
        <CH1 text="How will learning python help me?" />
        <SubTitle
          id={sections[0].id}
          class="mb-6"
          text="Find out why learning a programming language is a good investment."
        />
        <div className="flex items-center md:items-center p-3 md:pd-8 flex-col md:flex-row bg-accent rounded-lg">
          <Image
            className="rounded-lg"
            src={"/learning-python.webp"}
            width={200}
            height={150}
            alt="How will learning python help me illustration"
          />
          <p className={boldPClasses} id={sections[1].id}>
            Learning Python can significantly help you in your career,
            productivity, and problem-solving capabilities.
            <br />
            Here’s how learning Python can help you now and in the future.
          </p>
        </div>
        <SectionTitle section={sections[0]} />
        <SectionSubTitle section={sections[0]?.subsections?.[0]} />
        How will learning Python help you in your career? By acquiring Python
        skills, you position yourself as a valuable asset in numerous fields
        such as data science, web development, automation, and more. Python's
        widespread adoption by companies worldwide means a higher demand for
        skilled professionals.
        <SectionSubTitle section={sections[0]?.subsections?.[1]} />
        Python's simplicity and readability improve your logical thinking and
        problem-solving abilities. As you dive into coding challenges and
        projects, you'll find that learning Python helps you approach problems
        methodically, breaking them down into manageable parts.
        <br />
        <br />
        Python teaches you rigor through coding; even a small typo can crash
        your program, quickly showing you the importance of attention to detail
        and precise thinking.
        <blockquote className="mt-6 mb-6 border-l-2 pl-6 italic">
          Programming languages hold you accountable for every mistake; If you
          get an error, it is most likely caused by your mistake.
        </blockquote>
        <SectionSubTitle section={sections[0]?.subsections?.[2]} />
        How will learning Python help me in daily tasks? Python's versatility
        allows for the automation of repetitive tasks, freeing up your time for
        more complex challenges. Whether it's data analysis, file management, or
        automating emails, Python provides the tools to make your workflow more
        efficient.
        <br />
        <br />
        An amazing book on that is <LinkComponent link={automateTheBoring} />. I
        would recommend it, but there are also a lot of good tutos online / on
        Youtube.
        <SectionTitle section={sections[1]} />
        Looking ahead, the relevance of Python is set to grow even more. While
        AI advances, it won't fully replace software developers; instead, Python
        will remain a critical tool for building, managing, and innovating with
        AI technologies, ensuring its utility well into the future.
        <SectionSubTitle section={sections[1]?.subsections?.[0]} />
        As tools evolve, so does their power to change the game. Python is a
        perfect example. It gives us the power to dive into data science, AI,
        and much more with ease. The better we get at using these tools, the
        more doors we open to innovate and solve complex problems. It's all
        about mastering Python to unlock endless possibilities.
        <blockquote className="mt-6 mb-6 max-w-[650px] border-l-2 pl-6 italic">
          As the tools we will be getting soon (LLM and other ML goodies) get
          more powerfull, being able to implement them will be even more
          valuable.
        </blockquote>
        And luckily, virtually all these new tools can be used with Python.
        <SectionSubTitle section={sections[1]?.subsections?.[1]} />
        I write a bit more in depth about my reasoning here <LinkComponent link={weWillNeedCoder} />.
        But basically, I really don't think people who can code will stop being in demand. I think the role will shift but not go extinct.

        <SectionTitle section={sections[2]} />
        In a world where tech constantly shifts, Python shines as both a modern
        must-have and a future essential.
      </div>
      <Sidebar article={article} sections={sections} />
    </div>
  );
}

const sections: Section[] = [
  {
    title: "Learning Python will already help you now.",
    id: "now",
    subsections: [
      {
        title: "Unlocking Career Opportunities",
        id: "career",
      },
      {
        title: "Improve your Problem-Solving Skills",
        id: "how-to-think",
      },
      {
        title: "Boosting Productivity and Automation",
        id: "productivity",
      },
    ],
  },
  {
    title: "And will help you even more in the future.",
    subsections: [
      {
        title: "The better The Tools, the more important using them gets.",
        id: "better-tools",
      },
      {
        title: "People able to code will still be important",
        id: "how-python-is-different",
      },
    ],
    id: "coming-from-another",
  },
  {
    title: "Conclusion",
    id: "conclusion",
  },
] as const;
