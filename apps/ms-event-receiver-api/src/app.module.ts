import { Module } from '@nestjs/common';
import { EventReceiverApiModule } from './event/event.module';

@Module({
  imports: [EventReceiverApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
