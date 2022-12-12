import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import { Response } from "./common/response";
import { HttpFilter } from "./common/filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors())
  app.useGlobalInterceptors(new Response())
  app.useGlobalFilters(new HttpFilter())
  app.setGlobalPrefix("v1")
  app.use(bodyParser.json())
  await app.listen(3000);
}
bootstrap();
