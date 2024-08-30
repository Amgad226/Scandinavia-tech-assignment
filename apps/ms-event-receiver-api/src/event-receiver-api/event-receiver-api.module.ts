import { Module } from '@nestjs/common';
import { EventReceiverApiController } from './event-receiver-api.controller';
import { EventReceiverApiService } from './event-receiver-api.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { rabbitmqConfig } from 'libs/common/rabbitmq.config';

@Module({
  imports: [RabbitMQModule.forRoot(RabbitMQModule, rabbitmqConfig)],
  controllers: [EventReceiverApiController],
  providers: [EventReceiverApiService],
})
export class EventReceiverApiModule {}
