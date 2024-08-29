import { AmqpConnection } from 'scandinaviatech-test/node_modules/@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { IPublishMessage } from './interfaces/publish-message.interface';

 @Injectable()
export class MsEventPublisherService {
  private logger: Logger;
  constructor(private readonly amqpConnection: AmqpConnection) {
    this.logger = new Logger(MsEventPublisherService.name);
  }

  @Interval(5000)
  async publishEvent() {
    try {
      const message = {
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
}
