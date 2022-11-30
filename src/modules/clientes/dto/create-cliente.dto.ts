import { IsIn, IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class CreateClienteDto {


    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    apellidos: string;

    @IsString()
    @MinLength(1)
    direccion: string;

    @IsString()
    @MinLength(1)
    ciudad: string;

    @IsString()
    @MinLength(1)
    localidad: string;

    // @IsString()
    // @MinLength(1)
    // @IsIn(['anaya', 'marcombo'])
    // editorial: string;


}
