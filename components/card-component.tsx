import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function BlogCard() {
  return (
    <Card className="w-[350px] mr-4 mb-4">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </CardContent>
      <CardFooter className="flex justify-end">
        <a href="/blog/">Go to the article &rarr;</a>
      </CardFooter>
    </Card>
  );
}
