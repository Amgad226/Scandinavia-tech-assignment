import { Schema, Document } from 'mongoose';

export interface Event extends Document {
  name: string;
  counter: number;
  description: string;
  createdAt: Date;
}

export const EventSchema = new Schema<Event>({
  name: { type: String, required: true },
  counter: { type: Number, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
