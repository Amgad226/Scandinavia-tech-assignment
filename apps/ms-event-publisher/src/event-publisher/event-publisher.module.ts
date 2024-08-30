import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getRabbitMQConfig } from 'libs/config/rabbitmq.config';
import { EventPublisherService } from './event-publisher.service';

@Module({
  imports: [
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      useFactory: (configService: ConfigService) =>
        getRabbitMQConfig(configService),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [EventPublisherService],
})
export class EventPublisherModule {}
