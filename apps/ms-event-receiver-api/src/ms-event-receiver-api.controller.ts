import { Controller, Get } from '@nestjs/common';
import { MsEventReceiverApiService } from './ms-event-receiver-api.service';

@Controller()
export class MsEventReceiverApiController {
  constructor(private readonly msEventReceiverApiService: MsEventReceiverApiService) {}

  @Get()
  getHello(): string {
    return this.msEventReceiverApiService.getHello();
  }
}
