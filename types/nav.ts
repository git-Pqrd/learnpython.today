export class MainNavItem {
    disabled?: boolean;
    external?: boolean;
    items?: MainNavItem[];
    isNew?: boolean;
    href: string;
    title: string;

    constructor(disabled: boolean,
                external: boolean,
                isNew: boolean,
                href: string,
                title: string,
                items: MainNavItem[]) {
        this.disabled = disabled;
        this.external = external;
        this.items = items;
        this.isNew = isNew;
        this.href = href;
        this.title = title;
    }
}

export class SidebarNavItem {
    items: MainNavItem[];
    title?: string;
    href?: string;

    constructor(items: MainNavItem[], href: string, title: string) {
        this.title = title;
        this.href = href;
        this.items = items;
    }
}
