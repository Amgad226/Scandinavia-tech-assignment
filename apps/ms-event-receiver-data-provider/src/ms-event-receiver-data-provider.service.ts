import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MsEventReceiverDataProviderService {
  private logger: Logger;
  constructor() {
    this.logger = new Logger(MsEventReceiverDataProviderService.name);
  }
  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'routing.key',
  })
  public async consumeMessage(msg: any) {
    this.logger.log(`Received message: ${JSON.stringify(msg)}`);
  }
}
