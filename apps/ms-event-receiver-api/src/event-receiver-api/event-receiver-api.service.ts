import { AmqpConnection, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';
import { IPublishMessage } from 'libs/common/interfaces/publish-message.interface';

@Injectable()
export class EventReceiverApiService {
  private logger: Logger;
  constructor(private readonly amqpConnection: AmqpConnection) {
    this.logger = new Logger(EventReceiverApiService.name);
  }
  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'routing.key',
  })
  public async consumeMessage(msg: IPublishMessage) {
    this.logger.log(`Received message: ${JSON.stringify(msg)}`);
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
