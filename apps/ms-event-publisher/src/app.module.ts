import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { EventPublisherModule } from './event-publisher/event-publisher.module';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [EventPublisherModule, ScheduleModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
