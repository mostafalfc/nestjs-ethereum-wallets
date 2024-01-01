import { NestApplication, NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';
import configuration from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule);
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      package: configuration().grpc_service,
      protoPath: join(__dirname, './proto/wallet.proto'),
      url: '0.0.0.0:3009',
    },
  });
  await app.init();
  app.startAllMicroservices();
  app.listen(3000);
}
bootstrap();
