import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit => ${limit} offset => ${offset} brand => ${brand}`;
  }

  // Evitar este tipo de error para no hacer chocar las rutas....
  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  // Poner ids dinamicos a lo ultimo
  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `products ${productId}`;
  }
}
