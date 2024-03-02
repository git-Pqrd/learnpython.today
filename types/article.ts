export class Article {
    href?: string;
    title: string;
    slug?: string;
    tags: string[];
    synopsis: string;
    date: string;
    disabled?: boolean;

    constructor(
        href: string,
        title: string,
        slug: string,
        tags: string[],
        synopsis: string,
        date: string,
        disabled: boolean = false
    ) {
        this.href = href;
        this.title = title;
        this.slug = slug;
        this.tags = tags;
        this.synopsis = synopsis;
        this.date = date;
        this.disabled = disabled;
    }
}

