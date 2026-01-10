export interface Innovation {
    slug: string;
    title: string;
    description: string;
    image: string;
    year?: string;
    status?: 'active' | 'completed' | 'planned';
}
