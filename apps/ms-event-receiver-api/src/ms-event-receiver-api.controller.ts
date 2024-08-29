import { Controller, Get } from '@nestjs/common';
import { MsEventReceiverApiService } from './ms-event-receiver-api.service';

@Controller()
export class MsEventReceiverApiController {
  constructor(
    private readonly msEventReceiverApiService: MsEventReceiverApiService,
  ) {}

  @Get()
  async fetchLast10Events() {
    try {
      return await this.msEventReceiverApiService.requestRPC();
    } catch (e) {
      console.log(e);
    }
  }
}
