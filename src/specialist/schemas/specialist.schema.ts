


import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const specialistSchema = new Schema({

  name: {
    type: String,
    min: 5,
    max: 50,
  },
  email: {
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
