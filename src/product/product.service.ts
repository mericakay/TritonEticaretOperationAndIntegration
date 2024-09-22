import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  async create(product: Product): Promise<Product> {
    return await Product.create(product);
  }

  async findAll(): Promise<Product[]> {
    return await Product.findAll();
  }
}
