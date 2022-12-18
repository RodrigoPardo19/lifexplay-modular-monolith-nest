import { Module } from '@nestjs/common';
import { LifexplayUsersController } from './lifexplay-users.controller';
import { LifexplayUsersService } from './lifexplay-users.service';

@Module({
  imports: [],
  controllers: [LifexplayUsersController],
  providers: [LifexplayUsersService],
})
export class LifexplayUsersModule {}
