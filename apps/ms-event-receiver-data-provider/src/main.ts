import { NestFactory } from '@nestjs/core';
import { MsEventReceiverDataProviderModule } from './ms-event-receiver-data-provider.module';

async function bootstrap() {
  const app = await NestFactory.create(MsEventReceiverDataProviderModule);
  await app.listen(3002);
}
bootstrap();
