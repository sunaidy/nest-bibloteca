import { IsString , IsBoolean} from 'class-validator';

export class CreateLibroDto {
    
    @IsString()
    nombre: string;

    @IsString()
    isbn: string;

    @IsBoolean()
    estado: boolean; //0 prestado 1 disponible.
}
