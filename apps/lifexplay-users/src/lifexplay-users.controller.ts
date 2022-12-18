import { Controller, Get } from '@nestjs/common';
import { LifexplayUsersService } from './lifexplay-users.service';

@Controller()
export class LifexplayUsersController {
  constructor(private readonly lifexplayUsersService: LifexplayUsersService) {}

  @Get()
  getHello(): string {
    return this.lifexplayUsersService.getHello();
  }
}
