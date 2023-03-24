import { ConfigService } from '@nestjs/config/dist';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';
import { ENV } from './shared/env';
import { SwaggerConfig } from './shared/swagger/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, SwaggerConfig);
  SwaggerModule.setup('', app, document);

  console.log("test", ENV.KEY.user);
  console.log("test", new ConfigService().get('LOCAL_PORT'));
  console.log("http://localhost:"+ENV.SERVER.port);
  console.log("Documentation swagger.json : http://localhost:"+ENV.SERVER.port+"/-json");

  await app.listen(ENV.SERVER.port);
}
bootstrap();
