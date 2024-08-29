import { Injectable } from '@nestjs/common';

@Injectable()
export class MsEventPublisherService {
  getHello(): string {
    return 'Hello World!';
  }
}
