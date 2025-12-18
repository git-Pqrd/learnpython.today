import { UnifiedContent } from "@/types/unifiedContent";

export interface PathStep {
  name: string;
  content: UnifiedContent[];
  order?: number;
}

export interface Path {
  href: string;
  title: string;
  difficulty: number;
  synopsis: string;
  steps: PathStep[];
  disabled?: boolean;
  starred?: boolean;
}
