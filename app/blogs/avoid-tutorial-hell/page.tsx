import * as React from "react";
import Image from "next/image";
import {
  CH1,
  SubTitle,
  boldPClasses,
  normalPClasses,
} from "@/components/custom-typo";

export default function BlogIntro() {
  return (
    <div className="max-w-4xl my-8 px-4">
      <CH1 text="How to avoid tutorial hell." />
      <SubTitle
        class="mb-6"
        text="The cozy business of Tutorial Hell. What seems to be win-win for learners and creators."
      />
      <div className="flex items-center md:items-end lg:ml-4 md:ml-2 py-3 flex-col md:flex-row">
        <Image
          className="rounded-lg"
          src={"/tutorial-hell.jpg"}
          width={200}
          height={150}
          alt="Picture of the author"
        />
        <p className={boldPClasses}>
          If you're stuck in a loop of watching tutorials without doing much
          coding, you're in good company.
          <br />
          It's a comfortable spot for us learners and a lucrative one for
          tutorial creators. We enjoy the quick victories, while they appreciate
          the consistent income.
        </p>
      </div>
      <p className={normalPClasses}>
        Falling into Tutorial Hell is surprisingly easy.{" "}
        <b>
          It's a place where the allure of neatly packaged knowledge, clear
          instructions, and the illusion of progress keep us coming back for
          more.
        </b>{" "}
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        If you know the basic syntax of a language, you should get started with
        a project. You will be able to pick the skills you need when you need
        them.
      </blockquote>
      <p className={normalPClasses}>
        This cycle is seductive because it feels like we're constantly learning
        without the intimidation of real-world applications and the fear of
        failure. However, the comfort of Tutorial Hell comes with a price:
        stagnation. While tutorials can introduce concepts and tools, they often
        lack the complexity and unpredictability of actual projects.
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        You can learn everything for free. Don't feel like you need to pay for
        content. Most of it is online and accessible.
      </blockquote>
      <p className={normalPClasses}>
        The tutorial business, fueled by platforms like Udemy, has become
        incredibly lucrative. These platforms thrive on the continuous
        engagement of learners, offering an endless stream of courses. However,
        there's a catch: a learner who successfully transitions from tutorials
        to independent projects becomes a lost customer. In essence, their
        business model profits from keeping you learning, not necessarily from
        helping you reach a point where you no longer need tutorials.
        <br/>
        <br/>
        <b>
          The only real antidote to Tutorial Hell is to take the leap and dive
          into a project.
        </b>
      </p>
    </div>
  );
}
