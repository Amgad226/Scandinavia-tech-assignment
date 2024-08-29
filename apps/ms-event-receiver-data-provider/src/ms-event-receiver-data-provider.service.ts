import { RabbitSubscribe } from 'scandinaviatech-test/node_modules/@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

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
  public async consumeMessage(msg: any) {
    await this.prisma.event.create({
      data: {
        description: msg.description,
        name: msg.name,
        counter: msg.counter,
      },
    });
    this.logger.log(`Received message: ${JSON.stringify(msg)}`);
  }
}
