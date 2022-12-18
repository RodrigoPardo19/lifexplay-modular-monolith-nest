import { Test, TestingModule } from '@nestjs/testing';
import { LifexplayUsersController } from './lifexplay-users.controller';
import { LifexplayUsersService } from './lifexplay-users.service';

describe('LifexplayUsersController', () => {
  let lifexplayUsersController: LifexplayUsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LifexplayUsersController],
      providers: [LifexplayUsersService],
    }).compile();

    lifexplayUsersController = app.get<LifexplayUsersController>(LifexplayUsersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(lifexplayUsersController.getHello()).toBe('Hello World!');
    });
  });
});
