import { Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit => ${limit} offset => ${offset} brand => ${brand}`;
  }

  // Evitar este tipo de error para no hacer chocar las rutas....
  @Get('products/filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  // Poner ids dinamicos a lo ultimo
  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `products ${productId}`;
  }
  @Get('categories/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `category ${id} and ${productId}`;
  }
}
