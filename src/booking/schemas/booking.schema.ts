
import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const bookingSchema = new Schema({

  userId: {
    type: String,
  
  },

  service: {
    type: String,
  },  
  slot: {
    type: String,
  },
  specialist: {
    type: Object,

  },
  date: {
    type: Date,

  },
 
});
