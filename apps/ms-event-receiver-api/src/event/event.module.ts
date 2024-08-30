import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { rabbitmqConfig } from 'libs/common/rabbitmq.config';
import { EventReceiverService } from './event-receiver.service';

@Module({
  imports: [RabbitMQModule.forRoot(RabbitMQModule, rabbitmqConfig)],
  controllers: [EventController],
  providers: [EventService, EventReceiverService],
})
export class EventReceiverApiModule {}
