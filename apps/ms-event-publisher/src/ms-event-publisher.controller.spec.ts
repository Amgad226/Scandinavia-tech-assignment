import { Test, TestingModule } from '@nestjs/testing';
import { MsEventPublisherController } from './ms-event-publisher.controller';
import { MsEventPublisherService } from './ms-event-publisher.service';

describe('MsEventPublisherController', () => {
  let msEventPublisherController: MsEventPublisherController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsEventPublisherController],
      providers: [MsEventPublisherService],
    }).compile();

    msEventPublisherController = app.get<MsEventPublisherController>(MsEventPublisherController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msEventPublisherController.getHello()).toBe('Hello World!');
    });
  });
});
