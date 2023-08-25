import { IsString , IsBoolean, IsIn} from 'class-validator';

export class CreateLibroDto {
    @IsString()
    nombre: string;

    @IsString()
    isbn: string;

    @IsIn([0, 1])
    @IsBoolean()
    estado: boolean; //0 prestado 1 disponible.
}
