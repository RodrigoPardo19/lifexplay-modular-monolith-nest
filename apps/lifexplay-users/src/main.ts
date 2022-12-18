import { NestFactory } from '@nestjs/core';
import { LifexplayUsersModule } from './lifexplay-users.module';

async function bootstrap() {
  const app = await NestFactory.create(LifexplayUsersModule);
  await app.listen(3000);
}
bootstrap();
