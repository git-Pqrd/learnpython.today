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
import { CustomLink } from "@/types/link";
import { LinkComponent } from "@/components/custom-link-component";

export default function BlogIntro() {
  const article: Article = blogsDict.intro;
  const tutoralHellLink: CustomLink = blogsDict.tutorial_hell as CustomLink;
  return (
    <div className="my-8 md:px-2 lg:px-4  flex justify-between flex-row">
      <div className="max-w-4xl ">
        <CH1 text="The 3 steps of learning Python." />
        <SubTitle
          class="mb-6"
          text="Learning Python can be divided in 3 parts and that is it really..."
        />
        <Image
          className="rounded-lg"
          src={"/3-parts-label.png"}
          width={800}
          height={450}
          alt="Three steps to learn python."
        />
        <SectionTitle section={sections[0]} />
        <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
          <li>
            <b>The Syntax :</b> mastering the basics (variables, control flow,
            functions, modules)
          </li>
          <li>
            <b>Free Discovery :</b> applying knowledge through personal projects
            (something you like and probably won't show)
          </li>
          <li>
            <b>Showcasing :</b> Building a portfolio to showcase your
            problem-solving skills and employability.
          </li>
        </ul>
        <p>
          This approach ensures a solid foundation, practical application, and a
          tangible demonstration of your abilities to potential employers.
        </p>
        <SectionTitle section={sections[1]} />
        <SectionSubTitle section={sections[1]?.subsections?.[0]} />
        <ul className="list-disc list-inside">
          <li>
            Variables and Data Types: Learn how to store and manipulate data.
          </li>
          <li>
            Control Flow: Understand how to use conditional statements and loops
            to control the flow of your programs. (If you are new to
            programming).
          </li>
          <li>
            Functions: Discover how to organize your code into reusable blocks.
          </li>
        </ul>
        <SectionSubTitle section={sections[1]?.subsections?.[1]} />
        <p>
          You can revisit the basics anytime. And most often than not, people
          are ready to leave this step quit early. Most people are stuck here
          for reasons explained in my <LinkComponent link={tutoralHellLink} /> article.
        </p>
        <SectionTitle section={sections[2]} />
        <SectionSubTitle section={sections[2]?.subsections?.[0]} />
        <p>
          Got the basics? Great, now's the time to tackle some personal
          projects. They're your playground for deepening Python skills,
          unleashing creativity, and solving problems. Pick projects that grab
          you, even if they don't end up polished and perfect. It's all about
          the journey and the skills you pick up along the way.
        </p>
        <SectionSubTitle section={sections[2]?.subsections?.[1]} />
        <p>
          For those looking to secure a job or freelance opportunities, having a
          portfolio of projects is crucial. Your portfolio is a tangible proof
          of your skills and creativity. It should showcase a variety of
          projects that demonstrate your ability to solve problems with Python.
          At LearnPython.Today, we guide you through the process of building a
          portfolio that stands out.
        </p>
        <SectionTitle section={sections[3]} />
        <SectionSubTitle section={sections[3]?.subsections?.[0]} />
        <ul className="list-disc list-inside">
          <li>
            Diversify Your Projects: Include projects from different areas to
            show your versatility.
          </li>
          <li>
            Document Your Process: Use README files and comments to explain your
            thought process and the technologies used.
          </li>
          <li>
            Highlight Challenges and Solutions: Employers are interested in how
            you overcome obstacles, so detail the challenges you faced and how
            you solved them.
          </li>
          <li>
            Deploy Your Projects: Make your projects accessible by deploying
            them online. Platforms like GitHub Pages or Heroku can be used for
            showcasing web-based projects.
          </li>
        </ul>
        <SectionSubTitle section={sections[3]?.subsections?.[1]} />
        <p>
          For those looking to secure a job or freelance opportunities, having a
          portfolio of projects is crucial. Your portfolio is a tangible proof
          of your skills and creativity. It should showcase a variety of
          projects that demonstrate your ability to solve problems with Python.
          At LearnPython.Today, we guide you through the process of building a
          portfolio that stands out.
        </p>
        <SectionTitle section={sections[4]} />
        <p>
          Master the basics, then cycle between learning and doing. Aim higher
          with each project, fueling your motivation and tackling tougher
          challenges. Remember, demotivation is the main roadblock—keep pushing
          forward!
        </p>
      </div>
      <Sidebar article={article} sections={sections} />
    </div>
  );
}

const sections: Section[] = [
  {
    title: "What are the three steps.",
    id: "what-are",
  },
  {
    title: "The Syntax",
    subsections: [
      {
        id: "basic-syntax",
        title: "The only theory you should know at first.",
      },
      {
        id: "leave-syntax",
        title: "You are probably already done.",
      },
    ],
    id: "syntax",
  },
  {
    title: "Personal Projects",
    subsections: [
      {
        id: "perso-project-ship",
        title: "You won't ship it and that's ok.",
      },
      {
        id: "have-fun",
        title: "Take something you will enjoy.",
      },
    ],
    id: "perso-project",
  },
  {
    title: "Production Grade Projects",
    subsections: [
      {
        id: "employers-want-see",
        title: "What Employers want to see.",
      },
      {
        id: "tests-and-all",
        title: "Don't forget the boring parts.",
      },
    ],
    id: "production-project",
  },
  {
    title: "Conclusion",
    id: "conclusion",
  },
] as const;
