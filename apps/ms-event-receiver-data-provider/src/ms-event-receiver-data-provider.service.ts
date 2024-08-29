import { RabbitSubscribe, RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { IPublishMessage } from 'libs/common/interfaces/publish-message.interface';

@Injectable()
export class MsEventReceiverDataProviderService {
  private logger: Logger;
  constructor(private readonly prisma: PrismaService) {
    this.logger = new Logger(MsEventReceiverDataProviderService.name);
  }
  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'routing.key',
  })
  public async consumeMessage(msg: IPublishMessage) {
    await this.prisma.event.create({
      data: {
        description: msg.description,
        name: msg.name,
        counter: msg.counter,
      },
    });
    this.logger.log(`Received message: ${JSON.stringify(msg)}`);
  }
  @RabbitRPC({
    exchange: 'exchange1',
    routingKey: 'rpc',
  })
  async fetchLast10Events() {
    const events = await this.prisma.event.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10,
    });
    this.logger.debug(`new RPC request`);

    return events;
  }
}
