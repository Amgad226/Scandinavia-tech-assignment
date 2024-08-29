import { Module } from '@nestjs/common';
import { MsEventPublisherService } from './ms-event-publisher.service';
import { rabbitmqConfig } from 'libs/common/rabbitmq.config';
import { ScheduleModule } from '@nestjs/schedule';
import { RabbitMQModule } from 'scandinaviatech-test/node_modules/@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    RabbitMQModule.forRoot(RabbitMQModule, rabbitmqConfig),
  ],
  controllers: [],
  providers: [MsEventPublisherService],
})
export class MsEventPublisherModule {}
