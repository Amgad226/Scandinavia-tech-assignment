import { Controller, Get } from '@nestjs/common';
import { EventService } from './event.service';

@Controller()
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  async fetchLast10Events() {
    try {
      return await this.eventService.requestRPC();
    } catch (e) {
      console.log(e);
    }
  }
}
