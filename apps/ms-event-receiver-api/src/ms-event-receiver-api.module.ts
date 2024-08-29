import { Module } from '@nestjs/common';
import { MsEventReceiverApiController } from './ms-event-receiver-api.controller';
import { MsEventReceiverApiService } from './ms-event-receiver-api.service';

@Module({
  imports: [],
  controllers: [MsEventReceiverApiController],
  providers: [MsEventReceiverApiService],
})
export class MsEventReceiverApiModule {}
