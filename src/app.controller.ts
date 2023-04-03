import { Controller, Get, Param } from '@nestjs/common';
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

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `products ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `category ${id} and ${productId}`;
  }
}
