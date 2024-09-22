import { Controller, Get, Post, Body } from '@nestjs/common';
import { SalesService } from './sales.service';
import { Sale } from './sales.model';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  async create(@Body() sale: Sale) {
    return this.salesService.create(sale);
  }

  @Get()
  async findAll() {
    return this.salesService.findAll();
  }
}
