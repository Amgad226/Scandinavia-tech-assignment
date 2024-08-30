import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventReceiverModule } from './event-receiver/event-receiver.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), EventReceiverModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
