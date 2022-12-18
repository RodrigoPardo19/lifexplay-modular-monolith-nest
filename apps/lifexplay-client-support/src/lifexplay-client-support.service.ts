import { Injectable } from '@nestjs/common';

@Injectable()
export class LifexplayClientSupportService {
  getHello(): string {
    return 'Hello World!';
  }
}
