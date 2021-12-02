
export interface Booking extends Document {
   id?: string;
   userId: string;
   paymentId: string;
   service: string;
   specialist: object;
   date: Date;
}

