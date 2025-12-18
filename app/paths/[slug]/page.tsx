import { notFound } from "next/navigation";

import { CH1, SubTitle } from "@/components/custom-typo";
import { PathStep } from "@/components/path-step";
import { Badge } from "@/components/ui/badge";
import { paths } from "@/config/paths";
import { Path } from "@/types/path";

export default function PathDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const path = paths.find((p) => p.href === params.slug);

  if (!path) {
    return notFound();
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Difficulty {path.difficulty}</Badge>
          {path.starred && <Badge>Popular</Badge>}
        </div>
        <CH1 text={path.title} />
        <SubTitle text={path.synopsis} />
      </div>
      <div className="space-y-4">
        {path.steps.map((step, index) => (
          <PathStep key={`${path.href}-${step.name}`} step={step} index={index} />
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return paths.map((path: Path) => ({
    slug: path.href,
  }));
}
