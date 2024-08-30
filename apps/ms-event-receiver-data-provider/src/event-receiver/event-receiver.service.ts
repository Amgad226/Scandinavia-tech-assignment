import { RabbitRPC, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';
import { IPublishMessage } from 'libs/common/interfaces/publish-message.interface';
import { EventRepository } from './repositories/event.repository';

@Injectable()
export class EventReceiverService {
  private logger: Logger;
  constructor(private readonly eventRepository: EventRepository) {
    this.logger = new Logger(EventReceiverService.name);
  }
  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'routing.key',
    queue: 'msgs',
    queueOptions: {
      durable: true,
    },
  })
  public async consumeMessage(msg: IPublishMessage) {
    const newEvent = await this.eventRepository.create(msg);
    this.logger.log(`Store new Event: ${JSON.stringify(newEvent)}`);
  }
  @RabbitRPC({
    exchange: 'exchange1',
    routingKey: 'rpc',
  })
  async fetchLast10Events() {
    const events = await this.eventRepository.findMany({
      limit: 10,
      sort: 'desc',
    });

    this.logger.debug(`new RPC request`);

    return events;
  }
}
