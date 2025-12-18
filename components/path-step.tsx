import { LinkComponent } from "@/components/custom-link-component";
import { UnifiedCard } from "@/components/card-component";
import { Badge } from "@/components/ui/badge";
import { PathStep as LearningPathStep } from "@/types/path";
import { UnifiedContent, isLink } from "@/types/unifiedContent";

export function PathStep({
  step,
  index,
}: {
  step: LearningPathStep;
  index: number;
}) {
  return (
    <div className="space-y-3 rounded-lg border border-border p-4">
      <div className="flex items-center gap-2">
        <Badge variant="secondary">Step {index + 1}</Badge>
        <h3 className="text-lg font-semibold">{step.name}</h3>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {step.content.map((content: UnifiedContent, i: number) =>
          isLink(content) ? (
            <div
              key={`${content.content.title}-${i}`}
              className="flex h-full items-center rounded-lg border border-dashed border-border bg-muted/50 p-3"
            >
              <LinkComponent link={content.content} />
            </div>
          ) : (
            <UnifiedCard key={`${content.content.href}-${i}`} content={content} />
          )
        )}
      </div>
    </div>
  );
}
