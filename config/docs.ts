import { siteConfig } from "@/config/site"
import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
    mainNav: MainNavItem[]
    sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "About Me",
            href: "/about",
        },
        {
            title: "Blogs",
            href: "/blogs",
        },
        {
            title: "GitHub",
            href: siteConfig.links.github,
            external: true,
        },
    ],
    sidebarNav: [
        {
            title: "Getting Started",
            items: [
                {
                    title: "Popular Tags",
                    href: "/tags",
                    items: [
                        {
                            title: "GitHub",
                            href: siteConfig.links.github,
                            external: true,
                        },
                        {
                            title: "GitHub",
                            href: siteConfig.links.github,
                            external: true,
                        },
                        {
                            title: "GitHub",
                            href: siteConfig.links.github,
                            external: true,
                        },
                    ],
                },
            ],
        },
    ],
}
