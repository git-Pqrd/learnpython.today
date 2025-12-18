import { Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Path } from "@/types/path";
import { cn } from "@/lib/utils";

export function PathCard({ path }: { path: Path }) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col gap-2 bg-muted",
        path.starred && "shadow-lg shadow-primary/30"
      )}
    >
      <a href={`/paths/${path.href}`} className="flex h-full flex-col gap-2 p-4">
        <CardHeader className="p-0">
          <CardTitle className="flex items-center gap-2 text-xl">
            {path.title}
            {path.starred && <Star className="h-4 w-4 fill-primary text-primary" />}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 p-0">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="secondary">Difficulty {path.difficulty}</Badge>
            {path.disabled && <Badge variant="outline">Coming soon</Badge>}
          </div>
          <p className="text-sm text-muted-foreground">{path.synopsis}</p>
        </CardContent>
        <CardFooter className="p-0 text-sm font-semibold text-primary">Start path →</CardFooter>
      </a>
    </Card>
  );
}
