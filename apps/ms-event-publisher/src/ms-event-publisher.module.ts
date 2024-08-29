import { Module } from '@nestjs/common';
import { MsEventPublisherController } from './ms-event-publisher.controller';
import { MsEventPublisherService } from './ms-event-publisher.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { rabbitmqConfig } from 'libs/common/rabbitmq.config';

@Module({
  imports: [RabbitMQModule.forRoot(RabbitMQModule, rabbitmqConfig)],
  controllers: [MsEventPublisherController],
  providers: [MsEventPublisherService],
})
export class MsEventPublisherModule {}
