import { Article } from "@/types/article";
import { knownTags as kt } from "@/config/tag";

export const howTos: { [key: string]: Article } = {
  generate_waf_using_python: {
    title: "Create a Fake Voice with Python Now",
    href: "how_to_generate_waf",
    tags: [kt.python, kt.path, kt.how_to],
    synopsis:
      "Create a Fake Voice with Python for free using Google Colab and Hugging Face in minutes.",
    date: "03-05-2024",
    disabled: false,
    extern: false,
    starred: true,
    markdown: true,
  },
} as const;
