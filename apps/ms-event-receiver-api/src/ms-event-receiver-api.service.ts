import { Injectable } from '@nestjs/common';

@Injectable()
export class MsEventReceiverApiService {
  getHello(): string {
    return 'Hello World!';
  }
}
