import * as React from "react";
import Image from "next/image";
import { ContentTable } from "@/components/content-table";
import { CH1, SubTitle } from "@/components/custom-typo";
import { Section } from "@/types/section";

export default function BlogIntro() {
  // <ContentTable sections={sections}/>
  return (
    <div className="max-w-4xl my-8 px-4">
      <CH1 text="The 3 steps of learning Python." />
      <SubTitle
        class="mb-6"
        text="Learning Python can be divided in 3 parts.
        The Syntax, Projects to learn and Projects to showcase your mastery. And that is it really..."
      />
      <Image
        className="rounded-lg"
        src={"/3-parts-label.png"}
        width={800}
        height={450}
        alt="Three steps to learn python."
      />

      <h2 className="text-2xl font-bold mt-6">
        The Syntax: The Foundation
      </h2>
      <p>
        While Python is known for its readability and simplicity, it is still a not english.</p>

      <h3 className="text-xl font-semibold mt-4">The only theory you should know at first:</h3>
      <ul className="list-disc list-inside">
        <li>
          Variables and Data Types: Learn how to store and manipulate data.
        </li>
        <li>
          Control Flow: Understand how to use conditional statements and loops
          to control the flow of your programs. (If you are new to programming).
        </li>
        <li>
          Functions: Discover how to organize your code into reusable blocks.
        </li>
        <li>
          Modules and Packages: Explore how to enhance your programs with
          pre-built functionalities.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">
        Finding a Project That Sparks Your Interest
      </h2>
      <p>
        Once you're comfortable with the basics, the next step is to apply your
        knowledge to a project. Working on projects not only consolidates your
        understanding of Python but also sparks your creativity and
        problem-solving skills. At LearnPython.Today, we believe that passion is
        the greatest motivator; therefore, we encourage you to choose a project
        that genuinely interests you.
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

      <h2 className="text-2xl font-bold mt-6">
        Showcasing Your Work: Building a Portfolio
      </h2>
      <p>
        For those looking to secure a job or freelance opportunities, having a
        portfolio of projects is crucial. Your portfolio is a tangible proof of
        your skills and creativity. It should showcase a variety of projects
        that demonstrate your ability to solve problems with Python. At
        LearnPython.Today, we guide you through the process of building a
        portfolio that stands out.
      </p>

      <h3 className="text-xl font-semibold mt-4">
        Tips for Building a Strong Portfolio:
      </h3>
      <ul className="list-disc list-inside">
        <li>
          Diversify Your Projects: Include projects from different areas to show
          your versatility.
        </li>
        <li>
          Document Your Process: Use README files and comments to explain your
          thought process and the technologies used.
        </li>
        <li>
          Highlight Challenges and Solutions: Employers are interested in how
          you overcome obstacles, so detail the challenges you faced and how you
          solved them.
        </li>
        <li>
          Deploy Your Projects: Make your projects accessible by deploying them
          online. Platforms like GitHub Pages or Heroku can be used for
          showcasing web-based projects.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">Conclusion</h2>
      <p>
        Getting started with Python on LearnPython.Today is a journey that takes
        you from learning the syntax to building a portfolio that can impress
        potential employers. Remember, the key to success in programming is
        continuous learning and practice. By focusing on the syntax, engaging in
        projects that interest you, and building a strong portfolio, you'll be
        well on your way to becoming useful in Python and achieving your goals.
        Start your Python journey today and unlock the endless possibilities
        that this powerful language has to offer.
      </p>
    </div>
  );
}

const sections: Section[] = [
  {
    title: "Introduction to the blog",
    href: "",
  },
  {
    title: "Why Python?",
    subsections: [
      {
        href: "",
        title: "The importance of Python in today's world",
      },
      {
        href: "",
        title: "Python's versatility across different fields",
      },
    ],
    href: "",
  },
  {
    title: "Navigating the World of Python Resources",
    subsections: [
      {
        href: "",
        title: "Recommended tutorials, books, and communities",
      },
      {
        href: "",
        title: "How to avoid information overload",
      },
    ],
    href: "",
  },
  {
    title: "Staying Motivated on Your Learning Journey",
    subsections: [
      {
        href: "",
        title: "Overcoming common hurdles",
      },
      {
        href: "",
        title: "Setting realistic goals and tracking progress",
      },
    ],
    href: "",
  },
  {
    title: "Transitioning from Learning to Doing",
    subsections: [
      {
        href: "",
        title: "How to start contributing to projects",
      },
      {
        href: "",
        title: "Finding your niche in the Python community",
      },
    ],
    href: "",
  },
];
