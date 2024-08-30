import { Module } from '@nestjs/common';
import { EventReceiverApiModule } from './event-receiver-api/event-receiver-api.module';

@Module({
  imports: [EventReceiverApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
