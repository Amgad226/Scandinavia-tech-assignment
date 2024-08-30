import { Controller, Get } from '@nestjs/common';
import { EventReceiverApiService } from './event-receiver-api.service';

@Controller()
export class EventReceiverApiController {
  constructor(
    private readonly eventReceiverApiService: EventReceiverApiService,
  ) {}

  @Get()
  async fetchLast10Events() {
    try {
      return await this.eventReceiverApiService.requestRPC();
    } catch (e) {
      console.log(e);
    }
  }
}
