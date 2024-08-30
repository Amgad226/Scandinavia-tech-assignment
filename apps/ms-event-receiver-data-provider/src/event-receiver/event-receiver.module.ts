import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Event,
  EventSchema,
} from 'apps/ms-event-receiver-data-provider/src/schemas/event.schema';
import { getRabbitMQConfig } from 'libs/config/rabbitmq.config';
import { EventReceiverService } from './event-receiver.service';
import { EventRepository } from './repositories/event.repository';
@Module({
  imports: [
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      useFactory: (configService: ConfigService) =>
        getRabbitMQConfig(configService),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }]),
  ],
  controllers: [],
  providers: [EventRepository, EventReceiverService],
  exports: [EventRepository],
})
export class EventReceiverModule {}
