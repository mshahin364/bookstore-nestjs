import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // way-0
  app.enableCors();

  // way-1
  // app.enableCors({
  //   origin: 'http://localhost:4200',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  // });

  // way-2
  // app.use(function(req, res, next) {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header(
  //     'Access-Control-Allow-Headers',
  //     'Origin, X-Requested-With, Content-Type, Accept',
  //   );

  //   next();
  // });

  // app.use(cors());

  await app.listen(3000);
}
bootstrap();
