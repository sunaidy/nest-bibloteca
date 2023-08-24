import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';

@Table
export class Libro extends Model {
 @Column ({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @Column ({
    type: DataType.STRING,
    allowNull: true,
  })
  nombre: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  isbn: string;

  @Column({
    type: DataType.BOOLEAN
  })
  estado: boolean;

  @HasMany(() => Prestamo)
  prestamos: Prestamo[];
}
