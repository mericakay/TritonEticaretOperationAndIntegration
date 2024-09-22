import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() product: Product) {
    return this.productService.create(product);
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }
}
