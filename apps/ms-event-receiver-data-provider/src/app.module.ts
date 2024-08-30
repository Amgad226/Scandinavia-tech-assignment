import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EventReceiverModule } from './event-receiver/event-receiver.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_CONNECTION'),
      }),
      inject: [ConfigService],
    }),
    EventReceiverModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
