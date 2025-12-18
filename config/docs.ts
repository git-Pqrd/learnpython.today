import { siteConfig } from "@/config/site"
import { Article } from "@/types/article"
import { blogs } from "@/config/blogs"
import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface DocsConfig {
    blogs: Article[]
    mainNav: MainNavItem[]
    sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Blogs",
            href: "/blogs",
        },
        {
            title: "Games",
            href: "/games",
        },
        {
            title: "Paths",
            href: "/paths",
            isNew: true,
        },
        {
            title: "GitHub",
            href: siteConfig.links.github,
            external: true,
        },
    ],
    blogs: blogs,
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
                    ],
                },
            ],
        },
    ],
}
