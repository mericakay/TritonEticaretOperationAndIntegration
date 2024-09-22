import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table
export class Sale extends Model<Sale> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  productId: number;

  @Column
  quantity: number;

  @Column
  totalPrice: number;
}
