import { Injectable } from '@nestjs/common';

@Injectable()
export class MsEventReceiverDataProviderService {
  getHello(): string {
    return 'Hello World!';
  }
}
