import { NestFactory } from '@nestjs/core';
import { EventReceiverModule } from './event-receiver/event-receiver.module';

async function bootstrap() {
  const app = await NestFactory.create(EventReceiverModule);
  await app.listen(3002);
}
bootstrap();
