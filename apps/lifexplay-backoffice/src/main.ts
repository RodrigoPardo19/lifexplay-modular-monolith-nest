import { NestFactory } from '@nestjs/core';
import { LifexplayBackofficeModule } from './lifexplay-backoffice.module';

async function bootstrap() {
  const app = await NestFactory.create(LifexplayBackofficeModule);
  await app.listen(3000);
}
bootstrap();
