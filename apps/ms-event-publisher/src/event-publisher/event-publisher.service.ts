import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { IPublishMessage } from 'libs/common/interfaces/publish-message.interface';

@Injectable()
export class EventPublisherService {
  private counter = 0;
  private logger: Logger;
  constructor(private readonly amqpConnection: AmqpConnection) {
    this.logger = new Logger(EventPublisherService.name);
  }

  @Interval(1000)
  async publishEvent() {
    try {
      const message = {
        counter: this.counter++,
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
      console.log('Error publishing message:');
    }
  }
}
