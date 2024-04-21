import { Tag } from "@/types/tag";
import { CodeBlock } from "./codeBlock";
import { replacer } from "@/utils/codeComponentUtils";
import { knownTags as kt } from "@/config/tag";

export interface Game {
  href: string;
  title: string;
  tags: Tag[];
  synopsis: string;
  text: string;
  level: number;
  ref: number;
  codeBlock: string;
  extern: boolean;
  starred: boolean;
  disabled: boolean;
}

/** Builder for the Game Class */
export class GameBuilder {
  private href?: string;
  private title?: string;
  private tags?: Tag[];
  private synopsis?: string;
  private text?: string;
  private level?: number;
  private codeBlock?: string;
  private extern?: boolean;
  private starred?: boolean;
  private disabled?: boolean;
  private ref?: number;

  setTitle(title: string): GameBuilder {
    this.title = title;
    return this;
  }

  setHref(href: string): GameBuilder {
    this.href = href;
    return this;
  }

  setTags(tags: Tag[]): GameBuilder {
    this.tags = tags;
    return this;
  }

  setSynopsis(synopsis: string): GameBuilder {
    this.synopsis = synopsis;
    return this;
  }

  setText(text: string): GameBuilder {
    this.text = text;
    return this;
  }

  setLevel(level: number): GameBuilder {
    this.level = level;
    return this;
  }

  setDisabled(disabled: boolean): GameBuilder {
    this.disabled = disabled;
    return this;
  }

  setExtern(extern: boolean): GameBuilder {
    this.extern = extern;
    return this;
  }

  setCodeBlock(codeBlock: CodeBlock): GameBuilder {
    this.codeBlock = JSON.stringify(codeBlock, replacer, 2);
    return this;
  }

  isValid(): boolean {
    return (
      this.href === undefined ||
      this.title === undefined ||
      this.tags === undefined ||
      this.synopsis === undefined ||
      this.text === undefined ||
      this.level === undefined ||
      this.codeBlock === undefined ||
      this.extern === undefined ||
      this.starred === undefined ||
      this.disabled === undefined ||
      this.ref === undefined
    );
  }

  build(): Game {
    if (!this.isValid()) {
      throw new Error(
        "Cannot build game, one or more fields are not properly initialized."
      );
    }
    return {
      href: this.href ?? "",
      title: this.title ?? "",
      tags: this.tags ?? [kt.python],
      synopsis: this.synopsis ?? "",
      text: this.text ?? "",
      level: this.level ?? 0,
      codeBlock: this.codeBlock ?? "",
      starred: this.starred ?? false,
      disabled: this.disabled ?? false,
      extern: this.extern ?? false,
      ref: this.ref ?? 0
    };
  }
}
