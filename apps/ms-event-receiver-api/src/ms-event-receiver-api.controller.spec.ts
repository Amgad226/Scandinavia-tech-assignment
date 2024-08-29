import { Test, TestingModule } from '@nestjs/testing';
import { MsEventReceiverApiController } from './ms-event-receiver-api.controller';
import { MsEventReceiverApiService } from './ms-event-receiver-api.service';

describe('MsEventReceiverApiController', () => {
  let msEventReceiverApiController: MsEventReceiverApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsEventReceiverApiController],
      providers: [MsEventReceiverApiService],
    }).compile();

    msEventReceiverApiController = app.get<MsEventReceiverApiController>(MsEventReceiverApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msEventReceiverApiController.getHello()).toBe('Hello World!');
    });
  });
});
