import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const getRabbitMQConfig = (configService: ConfigService) => ({
  exchanges: [
    {
      name: 'exchange1',
      type: 'topic',
    },
  ],
  prefetchCount: 1, // Process one message at a time per worker instance
  queues: [{ name: 'msgs', exchange: 'exchange1' }],
  uri: configService.get<string>('RABBIT_CONNECTION'),
  logger: new Logger('Rabbit'),
});
