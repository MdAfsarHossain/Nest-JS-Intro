/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // it's confirm that data don't carry any extra property
    forbidNonWhitelisted: true, // if any extra property sent then it's throws back error
    transform: true // it'a make sure that the data which is being assigned to this user that is an instance of this create user Dto
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
