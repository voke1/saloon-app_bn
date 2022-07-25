


import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const serviceSchema = new Schema({

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
    duration: {
    type: String,

  },

    category: {
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
