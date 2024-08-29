import { Module } from '@nestjs/common';
import { MsEventReceiverDataProviderController } from './ms-event-receiver-data-provider.controller';
import { MsEventReceiverDataProviderService } from './ms-event-receiver-data-provider.service';

@Module({
  imports: [],
  controllers: [MsEventReceiverDataProviderController],
  providers: [MsEventReceiverDataProviderService],
})
export class MsEventReceiverDataProviderModule {}
