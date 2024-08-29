import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { IPublishMessage } from '../../../libs/common/interfaces/publish-message.interface';

 @Injectable()
export class MsEventPublisherService {
  private counter = 0;
  private logger: Logger;
  constructor(private readonly amqpConnection: AmqpConnection) {
    this.logger = new Logger(MsEventPublisherService.name);
  }

  @Interval(1000)
  async publishEvent() {
    try {
      this.counter++;
      const message = {
        counter: this.counter,
        name: 'name',
        description: 'desc',
        timestamp: new Date(),
      };
      await this.amqpConnection.publish<IPublishMessage>(
        'exchange1',
        'routing.key',
        message,
      );
      this.logger.log(`Published message: ${JSON.stringify(message)}`);
    } catch (error) {
      console.error('Error publishing message:', error);
    }
  }
  async requestRPC() {
    const response = await this.amqpConnection.request<any>({
      exchange: 'exchange1',
      routingKey: 'rpc',
      payload: {
        request: 'val',
      },
      timeout: 10000, // optional timeout for how long the request
      // should wait before failing if no response is received
    });
    return response;
  }
}
