export type PortfolioItemImageData = string | {
    type: 'image';
    src: string;
} | {
    type: 'video';
    src: string;
    videoType: 'mp4' | 'webm';
} | {
    type: 'youtube';
    id: string;
}

export type PortfolioItemData = {
    id: string;
    title: string;
    disabled?: boolean;
    description: string;
    coverImage: string;
    additionalImages?: PortfolioItemImageData[];
    additionalInfo?: {
        label: string;
        value: string;
    }[];
    fullDescription?: string;
    tags?: string[];
    roles?: string[];
    fromDate?: string;
    toDate?: string;
    link?: string;
};