export interface NirvaServiceStep {
    title: string;
    text: string;
}

export interface NirvaServiceFaq {
    q: string;
    a: string;
}

export interface NirvaService {
    slug: string;
    name: string;
    category: 'ai' | 'bpo';
    short?: string;
    description: string;
    icon: string;
    overview: string[];
    benefits: string[];
    included: string[];
    process: NirvaServiceStep[];
    faqs: NirvaServiceFaq[];
}

export interface NirvaCategory {
    title: string;
    blurb: string;
}

export interface NirvaMeta {
    title: string;
    description: string;
}

export interface NirvaContact {
    email: string;
    phone: string;
    address: string;
    socials: { label: string; href: string }[];
}

export interface RoadmapStep {
    phase: string;
    title: string;
}
