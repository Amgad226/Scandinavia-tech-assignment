import { RabbitSubscribe, RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';
import { IPublishMessage } from 'libs/common/interfaces/publish-message.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MsEventReceiverDataProviderService {
  private logger: Logger;
  constructor(@InjectModel('Event') private readonly eventModel: Model<Event>) {
    this.logger = new Logger(MsEventReceiverDataProviderService.name);
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
    const newEvent = new this.eventModel(msg);
    newEvent.save();
    this.logger.log(`Received message: ${JSON.stringify(msg)}`);
  }
  @RabbitRPC({
    exchange: 'exchange1',
    routingKey: 'rpc',
  })
  async fetchLast10Events() {
    const events = await this.eventModel
      .find()
      .sort({ createdAt: -1 })
      .limit(10);

    this.logger.debug(`new RPC request`);

    return events;
  }
}
