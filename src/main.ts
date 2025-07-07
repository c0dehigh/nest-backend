import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  /**
   * swagger configuration
   */
  const conf = new DocumentBuilder()
    .setTitle('Better Learn Nest Js')
    .setVersion('1.0')
    .setDescription('Use the base API URL as http://localhost:3000')
    .setTermsOfService('https://swagger.io/terms/')
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .addServer('http://localhost:3000', 'Local server')
    .build();

  // Instance of the swagger document
  const document = SwaggerModule.createDocument(app, conf);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
