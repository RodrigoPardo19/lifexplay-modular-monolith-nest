import { Test, TestingModule } from '@nestjs/testing';
import { LifexplayClientSupportController } from './lifexplay-client-support.controller';
import { LifexplayClientSupportService } from './lifexplay-client-support.service';

describe('LifexplayClientSupportController', () => {
  let lifexplayClientSupportController: LifexplayClientSupportController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LifexplayClientSupportController],
      providers: [LifexplayClientSupportService],
    }).compile();

    lifexplayClientSupportController = app.get<LifexplayClientSupportController>(LifexplayClientSupportController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(lifexplayClientSupportController.getHello()).toBe('Hello World!');
    });
  });
});
