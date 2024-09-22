import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { SalesModule } from './sales/sales.module';
import { Product } from './product/product.model';
import { User } from './user/user.model';
import { Sale } from './sales/sales.model';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Bu, kimlik doğrulama yapılmamışsa bağlantıya izin verir
        },
      },
      models: [Product, User, Sale],
      autoLoadModels: true,
      synchronize: true,
    }),
    ProductModule,
    UserModule,
    SalesModule,
  ],
})
export class AppModule {}
