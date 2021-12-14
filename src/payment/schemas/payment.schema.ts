


import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const paymentSchema = new Schema({

  userId: {
    type: String,
    min: 5,
    max: 50,
  },
  status: {
    type: String,

  },
  paymentDate: {
    type: Object,
  },
  amount: {
    type: String,
  
  },
   transaction_id: {
    type: String,
  
  },
   tx_ref: {
    type: String,
  
  },
   serviceId: {
    type: String,
  
  },
  paymentType: {
    type: String,

  },
  date: {
    type: Date,
    default: Date.now,
  },
});


