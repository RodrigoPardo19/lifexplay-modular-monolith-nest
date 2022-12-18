import { NestFactory } from '@nestjs/core';
import { LifexplayClientSupportModule } from './lifexplay-client-support.module';

async function bootstrap() {
  const app = await NestFactory.create(LifexplayClientSupportModule);
  await app.listen(3000);
}
bootstrap();
