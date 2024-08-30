import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { rabbitmqConfig } from 'libs/common/rabbitmq.config';
import { EventPublisherService } from './event-publisher.service';

@Module({
  imports: [RabbitMQModule.forRoot(RabbitMQModule, rabbitmqConfig)],
  controllers: [],
  providers: [EventPublisherService],
  exports: [EventPublisherService],
})
export class EventPublisherModule {}
