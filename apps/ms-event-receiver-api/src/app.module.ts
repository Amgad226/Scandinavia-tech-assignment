import { Module } from '@nestjs/common';
import { EventReceiverApiModule } from './event/event.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), , EventReceiverApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
