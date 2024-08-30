import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { rabbitmqConfig } from 'libs/common/rabbitmq.config';
import { EventSchema } from '../schemas/event.schema';
import { MsEventReceiverDataProviderController } from './ms-event-receiver-data-provider.controller';
import { MsEventReceiverDataProviderService } from './ms-event-receiver-data-provider.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, rabbitmqConfig),
    MongooseModule.forRoot('mongodb://localhost:27017/events'),
    MongooseModule.forFeature([{ name: 'Event', schema: EventSchema }]),
  ],
  controllers: [MsEventReceiverDataProviderController],
  providers: [MsEventReceiverDataProviderService],
})
export class MsEventReceiverDataProviderModule {}
