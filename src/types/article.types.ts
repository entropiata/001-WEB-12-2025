export interface Article {
    slug: string;
    title: string;
    date: string;
    category: string;
    image: string;
    excerpt?: string;
    content?: string;
    author?: string;
}
