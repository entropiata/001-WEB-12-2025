export interface Service {
    id: string;
    icon: string;
    title: string;
    description: string;
    jadwal: string;
}

export interface ServiceDetail extends Service {
    content?: string;
    facilities?: string[];
    requirements?: string[];
}
