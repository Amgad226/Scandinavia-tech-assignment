import { Test, TestingModule } from '@nestjs/testing';
import { MsEventReceiverDataProviderController } from './ms-event-receiver-data-provider.controller';
import { MsEventReceiverDataProviderService } from './ms-event-receiver-data-provider.service';

describe('MsEventReceiverDataProviderController', () => {
  let msEventReceiverDataProviderController: MsEventReceiverDataProviderController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsEventReceiverDataProviderController],
      providers: [MsEventReceiverDataProviderService],
    }).compile();

    msEventReceiverDataProviderController = app.get<MsEventReceiverDataProviderController>(MsEventReceiverDataProviderController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msEventReceiverDataProviderController.getHello()).toBe('Hello World!');
    });
  });
});
