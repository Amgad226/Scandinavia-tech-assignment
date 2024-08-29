import { NestFactory } from '@nestjs/core';
import { MsEventPublisherModule } from './ms-event-publisher.module';

async function bootstrap() {
  const app = await NestFactory.create(MsEventPublisherModule)
  await app.listen(3000); 
}
bootstrap();
