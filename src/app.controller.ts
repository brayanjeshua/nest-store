import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola Mundo!';
  }

  @Get('nuevo')
  newEndpoint() {
    return "i'm new";
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }
}
