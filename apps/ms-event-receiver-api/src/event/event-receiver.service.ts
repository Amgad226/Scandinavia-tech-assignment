import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';
import { IPublishMessage } from 'libs/common/interfaces/publish-message.interface';

@Injectable()
export class EventReceiverService {
  private logger: Logger;
  constructor() {
    this.logger = new Logger(EventReceiverService.name);
  }
  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'routing.key',
  })
  public async consumeMessage(msg: IPublishMessage) {
    this.logger.log(`Received message: ${JSON.stringify(msg)}`);
  }
}
