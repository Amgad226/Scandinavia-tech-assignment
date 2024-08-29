import { NestFactory } from '@nestjs/core';
import { MsEventReceiverApiModule } from './ms-event-receiver-api.module';

async function bootstrap() {
  const app = await NestFactory.create(MsEventReceiverApiModule);
  await app.listen(3001);
}
bootstrap();
