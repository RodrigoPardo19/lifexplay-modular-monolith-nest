import { Test, TestingModule } from '@nestjs/testing';
import { LifexplayBackofficeController } from './lifexplay-backoffice.controller';
import { LifexplayBackofficeService } from './lifexplay-backoffice.service';

describe('LifexplayBackofficeController', () => {
  let lifexplayBackofficeController: LifexplayBackofficeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LifexplayBackofficeController],
      providers: [LifexplayBackofficeService],
    }).compile();

    lifexplayBackofficeController = app.get<LifexplayBackofficeController>(LifexplayBackofficeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(lifexplayBackofficeController.getHello()).toBe('Hello World!');
    });
  });
});
