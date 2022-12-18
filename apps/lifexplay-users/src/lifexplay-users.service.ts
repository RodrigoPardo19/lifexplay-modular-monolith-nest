import { Injectable } from '@nestjs/common';

@Injectable()
export class LifexplayUsersService {
  getHello(): string {
    return 'Hello World!';
  }
}
