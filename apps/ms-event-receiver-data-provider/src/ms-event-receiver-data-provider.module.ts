import { Module } from '@nestjs/common';
import { MsEventReceiverDataProviderController } from './ms-event-receiver-data-provider.controller';
import { MsEventReceiverDataProviderService } from './ms-event-receiver-data-provider.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { rabbitmqConfig } from 'libs/common/rabbitmq.config';

@Module({
  imports: [RabbitMQModule.forRoot(RabbitMQModule, rabbitmqConfig)],
  controllers: [MsEventReceiverDataProviderController],
  providers: [MsEventReceiverDataProviderService],
})
export class MsEventReceiverDataProviderModule {}
