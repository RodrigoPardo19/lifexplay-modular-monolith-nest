import { Controller, Get } from '@nestjs/common';
import { LifexplayClientSupportService } from './lifexplay-client-support.service';

@Controller()
export class LifexplayClientSupportController {
  constructor(private readonly lifexplayClientSupportService: LifexplayClientSupportService) {}

  @Get()
  getHello(): string {
    return this.lifexplayClientSupportService.getHello();
  }
}
