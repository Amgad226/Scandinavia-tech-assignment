import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getRabbitMQConfig } from 'libs/config/rabbitmq.config';
import { EventReceiverService } from './event-receiver.service';
import { EventController } from './event.controller';
import { EventService } from './event.service';

@Module({
  imports: [
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      useFactory: (configService: ConfigService) =>
        getRabbitMQConfig(configService),
      inject: [ConfigService],
    }),
  ],
  controllers: [EventController],
  providers: [EventService, EventReceiverService],
})
export class EventReceiverApiModule {}
