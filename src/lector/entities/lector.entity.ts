import { Column, Model, Table, DataType } from 'sequelize-typescript';

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
}
