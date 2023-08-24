import {
    AutoIncrement,
    BelongsTo,
    Column,
    CreatedAt,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt,
} from "sequelize-typescript";
import { Lector } from "../../lector/entities/lector.entity";
import { Libro } from "../../libro/entities/libro.entity";

@Table
export class Prestamo extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @ForeignKey(() => Libro)
    @Column
    libroId: number;

    @ForeignKey(() => Lector)
    @Column
    lectorId: number;
    
    @BelongsTo(() => Libro, { as: "libro", foreignKey: "libroId" })
    libro: Libro;

    @BelongsTo(() => Lector, { as: "lector", foreignKey: "lectorId" })
    lector: Lector;
}
