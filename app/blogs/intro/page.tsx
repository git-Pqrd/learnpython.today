import * as React from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Section } from "@types/section";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function ContentTable() {
  return (
    <div className="max-w-[600px]">
      {sections.map((section: Section) => (
        <Collapsible
          key={section.title}
          defaultOpen={sections[0].title == section.title}
          className="w-full space-y-2"
        >
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between space-x-4 px-4 cursor-pointer">
              <h4 className="text-sm font-semibold">{section.title}</h4>
              <Button variant="ghost" size="sm">
                <CaretSortIcon className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent className="space-y-2">
            {section.subsections.map((sub: Section) => (
              <div
                key={sub}
                className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm"
              >
                {sub}
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
}

const sections: Section = [
  {
    title: "Introduction to the blog",
    subsections: ["What to expect"],
  },
  {
    title: "Why Python?",
    subsections: [
      "The importance of Python in today's world",
      "Python's versatility across different fields",
    ],
  },
  {
    title: "Navigating the World of Python Resources",
    subsections: [
      "Recommended tutorials, books, and communities",
      "How to avoid information overload",
    ],
  },
  {
    title: "Staying Motivated on Your Learning Journey",
    subsections: [
      "Overcoming common hurdles",
      "Setting realistic goals and tracking progress",
    ],
  },
  {
    title: "Transitioning from Learning to Doing",
    subsections: [
      "How to start contributing to projects",
      "Finding your niche in the Python community",
    ],
  },
];
