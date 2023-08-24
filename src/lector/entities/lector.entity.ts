import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';

@Table
export class Lector extends Model{
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

      @HasMany(() => Prestamo)
      prestamos: Prestamo[];
}
