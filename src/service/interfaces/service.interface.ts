
export interface Service extends Document {
    id?: string;
    name: string;
    description: string;
    amount: string;
    duration: string;
    category: string;
    imageUrl: string;
    date?: Date;
}
