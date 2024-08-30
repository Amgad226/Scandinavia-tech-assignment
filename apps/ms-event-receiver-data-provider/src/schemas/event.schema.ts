import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type EventDocument = HydratedDocument<Event>;

export class Event extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  counter: number;

  @Prop({ required: true })
  description: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}
export const EventSchema = SchemaFactory.createForClass(Event);
