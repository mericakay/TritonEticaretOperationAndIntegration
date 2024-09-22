import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sale } from './sales.model'; // Doğru içe aktarma

@Module({
  imports: [SequelizeModule.forFeature([Sale])],
  controllers: [SalesController],
  providers: [SalesService],
  exports: [SalesService],
})
export class SalesModule {}
