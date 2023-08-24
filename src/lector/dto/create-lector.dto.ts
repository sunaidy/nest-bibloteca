import { IsString } from 'class-validator';

export class CreateLectorDto {
    @IsString()
    nombre: string;
}
