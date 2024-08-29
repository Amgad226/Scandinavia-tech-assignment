import { Controller, Get } from '@nestjs/common';
import { MsEventPublisherService } from './ms-event-publisher.service';

@Controller()
export class AController {
  constructor(
    private readonly msEventPublisherService: MsEventPublisherService,
  ) {}
  @Get()
  async fetchLast10Events() {
    try {
      return await this.msEventPublisherService.requestRPC();
    } catch (e) {
      console.log(e);
    }
  }


}
