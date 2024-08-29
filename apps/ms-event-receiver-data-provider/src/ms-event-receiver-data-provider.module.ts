import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { rabbitmqConfig } from 'libs/common/rabbitmq.config';
import { MsEventReceiverDataProviderController } from './ms-event-receiver-data-provider.controller';
import { MsEventReceiverDataProviderService } from './ms-event-receiver-data-provider.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, rabbitmqConfig),
    PrismaModule,
  ],
  controllers: [MsEventReceiverDataProviderController],
  providers: [MsEventReceiverDataProviderService],
})
export class MsEventReceiverDataProviderModule {}
