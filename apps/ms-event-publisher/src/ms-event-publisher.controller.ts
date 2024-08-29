import { Controller, Get } from '@nestjs/common';
import { MsEventPublisherService } from './ms-event-publisher.service';

@Controller()
export class MsEventPublisherController {
  constructor(private readonly msEventPublisherService: MsEventPublisherService) {}

  @Get()
  getHello(): string {
    return this.msEventPublisherService.getHello();
  }
}
