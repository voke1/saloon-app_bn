
export interface Service extends Document {
    id?: string;
    name: string;
    description: string;
    category: string;
    imageUrl: string;
    date?: Date;
}
