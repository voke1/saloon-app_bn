
export interface Offer extends Document {
    id?: string;
    name: string;
    description: string;
    services: string;
    duration: string;
    amount: string;
    imageUrl: string;
    date?: Date;
}
