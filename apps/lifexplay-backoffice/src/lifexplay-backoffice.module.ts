import { Module } from '@nestjs/common';
import { LifexplayBackofficeController } from './lifexplay-backoffice.controller';
import { LifexplayBackofficeService } from './lifexplay-backoffice.service';

@Module({
  imports: [],
  controllers: [LifexplayBackofficeController],
  providers: [LifexplayBackofficeService],
})
export class LifexplayBackofficeModule {}
