import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';
import { EventDocument } from 'libs/common/schemas/event.schema';

@Injectable()
export class EventService {
  private logger: Logger;
  constructor(private readonly amqpConnection: AmqpConnection) {
    this.logger = new Logger(EventService.name);
  }

  async requestRPC() {
    this.logger.debug('send RPC request');
    const events = await this.amqpConnection.request<EventDocument[]>({
      exchange: 'exchange1',
      routingKey: 'rpc',
      timeout: 10000,
    });
    return events;
  }
}
