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

export default function BlogIntro() {
  const article: Article = blogsDict.intro;
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
        <h3 className="text-xl font-semibold mt-4">
          The only theory you should know at first:
        </h3>
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
          <li>
            Modules and Packages: Explore how to enhance your programs with
            pre-built functionalities.
          </li>
        </ul>
        <SectionTitle section={sections[2]} />
        <SectionSubTitle section={sections[2]?.subsections?.[0]} />
        <p>
          Once you're comfortable with the basics, the next step is to apply
          your knowledge to a project. Working on projects not only consolidates
          your understanding of Python but also sparks your creativity and
          problem-solving skills. At LearnPython.Today, we believe that passion
          is the greatest motivator; therefore, we encourage you to choose a
          project that genuinely interests you.
        </p>
        <h3 className="text-xl font-semibold mt-4">
          Project Ideas to Get You Started:
        </h3>
        <ul className="list-disc list-inside">
          <li>Web Scraping: Collect data from the internet for analysis.</li>
          <li>Automation: Automate repetitive tasks to save time.</li>
          <li>Web Development: Build a website with Flask or Django.</li>
          <li>Data Analysis: Analyze datasets to uncover insights.</li>
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
        <SectionTitle section={sections[3]} />
        <SectionSubTitle section={sections[3]?.subsections?.[1]} />
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
        <SectionTitle section={sections[4]} />
        <p>
          Getting started with Python on LearnPython.Today is a journey that
          takes you from learning the syntax to building a portfolio that can
          impress potential employers. Remember, the key to success in
          programming is continuous learning and practice. By focusing on the
          syntax, engaging in projects that interest you, and building a strong
          portfolio, you'll be well on your way to becoming useful in Python and
          achieving your goals. Start your Python journey today and unlock the
          endless possibilities that this powerful language has to offer.
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
        title: "Video, Tutorials and TodoLists",
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
