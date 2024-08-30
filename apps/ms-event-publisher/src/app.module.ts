import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { EventPublisherModule } from './event-publisher/event-publisher.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    EventPublisherModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
