
import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const appointmentSchema = new Schema({

  userId: {
    type: String,
  
  },
  paymentId: {
    type: String,

  },
  bookingId: {
    type: String,
  }, 
   status: {
    type: String,
  },  
  date: {
    type: Date,

  },
 
});
