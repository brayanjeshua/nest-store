import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products: limit => ${limit} offset => ${offset} brand => ${brand}`,
    };
  }

  // Evitar este tipo de error para no hacer chocar las rutas....
  @Get('filter')
  getFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  // Poner ids dinamicos a lo ultimo
  @Get(':productId')
  getOne(@Param('productId') productId: string) {
    return {
      message: `product: ${productId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Create Action',
      payload,
    };
  }
}