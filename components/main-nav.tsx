"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <a href="/" className="mr-6 flex items-center space-x-2">
        <Image
          alt={`logo ${siteConfig.name}`}
          src="/logo-bg-removed.png"
          width={75}
          height={75}
          className="h-6 w-6"
        />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </a>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <a
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          About Me
        </a>
        <a
          href="/blogs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Blogs
        </a>
        <a
          href={siteConfig.links.github}
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          GitHub
        </a>
      </nav>
    </div>
  );
}
