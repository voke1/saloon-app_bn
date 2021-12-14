
export interface Booking extends Document {
   id?: string;
   userId: string;
   service: string;
   slot: string;
   specialist: object;
   date: Date;
}

