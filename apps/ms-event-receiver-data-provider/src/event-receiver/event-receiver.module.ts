import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { rabbitmqConfig } from 'libs/common/rabbitmq.config';
import { EventReceiverService } from './event-receiver.service';
import { EventRepository } from './repositories/event.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  EventSchema,
  Event,
} from 'libs/common/schemas/event.schema';
@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, rabbitmqConfig),
    MongooseModule.forRoot(
      process.env.MONGO_CONNECTION ?? 'mongodb://localhost:27017/events',
    ),
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }]),
  ],
  controllers: [],
  providers: [EventRepository, EventReceiverService],
  exports: [EventRepository],
})
export class EventReceiverModule {}
