import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MsEventReceiverApiService {
  private logger: Logger;
  constructor(private readonly amqpConnection: AmqpConnection) {
    this.logger = new Logger(MsEventReceiverApiService.name);
  }
  async requestRPC() {
    this.logger.debug('send RPC request');
    const response = await this.amqpConnection.request<any>({
      exchange: 'exchange1',
      routingKey: 'rpc',
      timeout: 10000,
    });
    return response;
  }
}
