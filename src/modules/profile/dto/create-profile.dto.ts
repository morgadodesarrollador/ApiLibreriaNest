import { IsString, MinLength } from "class-validator";

export class CreateProfileDto {


    @IsString()
    @MinLength(1)
    email: string;

    @IsString()
    @MinLength(1)
    password: string;

    @IsString()
    @MinLength(1)
    website: string;

    @IsString()
    @MinLength(1)
    github: string;

    @IsString()
    @MinLength(1)
    twitter: string;

    @IsString()
    @MinLength(1)
    idCliente: string;

}
