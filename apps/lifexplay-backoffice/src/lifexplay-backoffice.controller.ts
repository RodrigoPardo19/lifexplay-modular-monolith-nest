import { Controller, Get } from '@nestjs/common';
import { LifexplayBackofficeService } from './lifexplay-backoffice.service';

@Controller()
export class LifexplayBackofficeController {
  constructor(private readonly lifexplayBackofficeService: LifexplayBackofficeService) {}

  @Get()
  getHello(): string {
    return this.lifexplayBackofficeService.getHello();
  }
}
