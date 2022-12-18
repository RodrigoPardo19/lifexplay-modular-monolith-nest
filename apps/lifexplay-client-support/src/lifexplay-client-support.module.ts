import { Module } from '@nestjs/common';
import { LifexplayClientSupportController } from './lifexplay-client-support.controller';
import { LifexplayClientSupportService } from './lifexplay-client-support.service';

@Module({
  imports: [],
  controllers: [LifexplayClientSupportController],
  providers: [LifexplayClientSupportService],
})
export class LifexplayClientSupportModule {}
