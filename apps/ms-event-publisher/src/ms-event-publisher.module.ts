import { Module } from '@nestjs/common';
import { MsEventPublisherService } from './ms-event-publisher.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { rabbitmqConfig } from 'libs/common/rabbitmq.config';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    RabbitMQModule.forRoot(RabbitMQModule, rabbitmqConfig),
  ],
  controllers: [],
  providers: [MsEventPublisherService],
})
export class MsEventPublisherModule {}
