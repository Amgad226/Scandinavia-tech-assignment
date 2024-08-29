import { Controller, Get } from '@nestjs/common';
import { MsEventReceiverDataProviderService } from './ms-event-receiver-data-provider.service';

@Controller()
export class MsEventReceiverDataProviderController {
  constructor(private readonly msEventReceiverDataProviderService: MsEventReceiverDataProviderService) {}

  @Get()
  getHello(): string {
    return this.msEventReceiverDataProviderService.getHello();
  }
}
