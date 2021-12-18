


import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const offerSchema = new Schema({

  name: {
    type: String,
    min: 5,
    max: 50,
  },
  description: {
    type: String,

  },
  amount: {
    type: String,

  },
    services: {
    type: String,

  },
    duration: {
    type: String,

  },
  imageUrl: {
    type: String,
    
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
