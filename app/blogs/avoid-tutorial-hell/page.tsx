import * as React from "react";
import Image from "next/image";
import { blogsDict } from "@/config/blogs";
import { Section } from "@/types/section";
import {
  CH1,
  SubTitle,
  boldPClasses,
  normalPClasses,
  SectionSubTitle,
  SectionTitle,
} from "@/components/custom-typo";
import { Sidebar } from "@/components/sidebar-component";
import { Article } from "@/types/article";

export default function TutorialHell() {
  const article: Article = blogsDict.tutorial_hell;
  return (
    <div className="my-8 md:px-2 lg:px-4 flex justify-center flex-row">
      <div className="max-w-4xl ">
        <CH1 text="How to avoid tutorial hell." />
        <SubTitle
          id={sections[0].id}
          class="mb-6"
          text="The cozy business of Tutorial Hell. What seems to be win-win for learners and creators."
        />
        <div className="flex items-center md:items-center p-3 md:pd-8 flex-col md:flex-row bg-accent rounded-lg">
          <Image
            className="rounded-lg"
            src={"/tutorial-hell.jpg"}
            width={200}
            height={150}
            alt="Picture of the author"
          />
          <p className={boldPClasses} id={sections[1].id}>
            If you're stuck in a loop of watching tutorials without doing much
            coding, you're not alone.
            <br />
            It's a comfortable spot for us learners and a lucrative one for
            tutorial creators. We enjoy the quick victories, while they
            appreciate the consistent income.
          </p>
        </div>
        <SectionTitle section={sections[1]} />
        <SectionSubTitle section={sections[1]?.subsections?.[0]} />
        <p className={normalPClasses}>
          It's a place where the allure of neatly packaged knowledge, clear
          instructions, and the illusion of progress keep us coming back for
          more.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          If you know the basic syntax of a language, you should get started
          with a project. You will be able to pick the skills you need when you
          need them.
        </blockquote>
        <SectionSubTitle section={sections[1]?.subsections?.[1]} />
        <p className={normalPClasses}>
          This cycle is seductive because it feels like we're constantly
          learning without the intimidation of real-world applications and the
          fear of failure. However, the comfort of Tutorial Hell comes with a
          price: stagnation. While tutorials can introduce concepts and tools,
          they often lack the complexity and unpredictability of actual
          projects.
        </p>
        <SectionTitle section={sections[2]} />
        <SectionSubTitle section={sections[2]?.subsections?.[0]} />
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          You can learn everything for free. Don't feel like you need to pay for
          content. Most of it is online and accessible.
        </blockquote>
        <SectionSubTitle section={sections[2]?.subsections?.[1]} />
        <p className={normalPClasses}>
          The tutorial business, fueled by platforms like Udemy, has become
          incredibly lucrative. These platforms thrive on the continuous
          engagement of learners, offering an endless stream of courses.
          However, there's a catch: a learner who successfully transitions from
          tutorials to independent projects becomes a lost customer. In essence,
          their business model profits from keeping you learning, not
          necessarily from helping you reach a point where you no longer need
          tutorials.
        </p>
        <SectionTitle section={sections[3]} />
        <b>
          The only real antidote to Tutorial Hell is to take the leap and dive
          into a project.
        </b>
      </div>
      <Sidebar article={article} sections={sections} />
    </div>
  );
}

const sections: Section[] = [
  {
    title: "Introduction",
    id: "#",
  },
  {
    title: "The Cozy Business of Tutorial Hell",
    id: "cozy-business",
    subsections: [
      {
        title: "Why content creator like it.",
        id: "why-cc-like-it",
      },
      {
        title: "Why we like it.",
        id: "why-we-like-it",
      },
    ],
  },
  {
    title: "Breaking Free",
    subsections: [
      {
        title: "The Importance of Projects",
        id: "",
      },
      {
        title: "Navigating Free Learning",
        id: "",
      },
    ],
    id: "",
  },
  {
    title: "Conclusion",
    id: "conclusion",
  },
] as const;
