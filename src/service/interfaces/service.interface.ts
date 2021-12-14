
export interface Service extends Document {
    id?: string;
    name: string;
    description: string;
    imageUrl: string;
    date?: Date;
}
