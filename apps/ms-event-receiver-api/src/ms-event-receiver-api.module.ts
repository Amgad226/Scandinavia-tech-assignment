import { Module } from '@nestjs/common';
import { MsEventReceiverApiController } from './ms-event-receiver-api.controller';
import { MsEventReceiverApiService } from './ms-event-receiver-api.service';
import { RabbitMQModule } from 'scandinaviatech-test/node_modules/@golevelup/nestjs-rabbitmq';
import { rabbitmqConfig } from 'libs/common/rabbitmq.config';

@Module({
  imports: [RabbitMQModule.forRoot(RabbitMQModule, rabbitmqConfig)],
  controllers: [MsEventReceiverApiController],
  providers: [MsEventReceiverApiService],
})
export class MsEventReceiverApiModule {}
