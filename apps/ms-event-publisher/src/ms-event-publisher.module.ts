import { Module } from '@nestjs/common';
import { MsEventPublisherController } from './ms-event-publisher.controller';
import { MsEventPublisherService } from './ms-event-publisher.service';

@Module({
  imports: [],
  controllers: [MsEventPublisherController],
  providers: [MsEventPublisherService],
})
export class MsEventPublisherModule {}
