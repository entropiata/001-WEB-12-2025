export interface PageMeta {
    title: string;
    description: string;
}

export interface NavigationItem {
    name: string;
    href: string;
    submenu?: NavigationItem[];
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
