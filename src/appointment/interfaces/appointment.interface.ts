
export interface Appointment extends Document {
   id?: string;
   userId: string;
   paymentId: string;
   bookingId: string;
   status: string;
   date: Date;
}

