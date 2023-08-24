import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber } from "class-validator";

export class CreatePrestamoDto {

    @ApiProperty({ example: 1, description: "libro Id" })
    @IsNumber()
    libroId?: number;

    @ApiProperty({ example: 1, description: "lector Id" })
    @IsNumber()
    lectorId?: number;
}
