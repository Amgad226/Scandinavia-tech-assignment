import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from '../schemas/event.schema';
import { EventReceiverModule } from './event-receiver/event-receiver.module';

@Module({
  imports: [EventReceiverModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
