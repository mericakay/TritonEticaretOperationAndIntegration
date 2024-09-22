import { Injectable } from '@nestjs/common';
import { Sale } from './sales.model';

@Injectable()
export class SalesService {
  async create(sale: Sale): Promise<Sale> {
    return await Sale.create(sale);
  }

  async findAll(): Promise<Sale[]> {
    return await Sale.findAll();
  }
}
