import { RabbitMQConfig } from '@golevelup/nestjs-rabbitmq';
import { Logger } from '@nestjs/common';

export const rabbitmqConfig: RabbitMQConfig = {
  exchanges: [
    {
      name: 'exchange1',
      type: 'topic',
    },
  ],
  uri:
    process.env.RABBIT_CONNECTION ?? 'amqp://username:password@localhost:5672',
  logger: new Logger('Rabbit'),
};
