"use client";

import * as React from "react";
import { Link1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Section } from "@/types/section";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function ContentTable(props: { sections: Section[] }) {
  const sections = props.sections;
  return (
    <div className="w-full min-w-100 mt-4">
      {sections.map((section: Section) => (
        <Collapsible
          key={section.title}
          defaultOpen={true}
          className="w-full space-y-2"
        >
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between w-full space-x-4 px-4 cursor-pointer">
              <h4 className="text-sm font-semibold underline">{section.title}</h4>
              <Button variant="ghost" size="sm">
                {section.id && (
                  <Link href={"#" + section.id}>
                    <Link1Icon className="h-4 w-4" />
                    <span className="sr-only">Goto</span>
                  </Link>
                )}
              </Button>
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent className="space-y-2">
            {section.subsections?.map((sub: Section) => (
              <div
                key={sub.id}
                className="cursor-pointer rounded-md border px-4 py-2 font-mono text-sm shadow-sm"
              >
                <Link href={"#" + section.id}>{sub.title}</Link>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
}
