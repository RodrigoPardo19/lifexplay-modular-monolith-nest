import { Injectable } from '@nestjs/common';

@Injectable()
export class LifexplayBackofficeService {
  getHello(): string {
    return 'Hello World!';
  }
}
