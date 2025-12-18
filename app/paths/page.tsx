import * as React from "react";

import { CH1, SubTitle } from "@/components/custom-typo";
import { PathCard } from "@/components/path-card";
import { paths } from "@/config/paths";

export default function PathsPage() {
  return (
    <div className="space-y-6">
      <div>
        <CH1 text="Learning Paths" />
        <SubTitle text="Follow structured journeys that mix videos, reads, and games." />
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {paths.map((path) => (
          <PathCard key={path.href} path={path} />
        ))}
      </div>
    </div>
  );
}
