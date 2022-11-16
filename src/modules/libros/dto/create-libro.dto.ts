import { IsDate, IsIn, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";


export class CreateLibroDto {

   
    @IsString()
    @MinLength(3)
    title: string;

    @IsString()
    @MinLength(10)
    isbn: string;

    @IsNumber()
    @IsPositive()
    pageCount: number;
    
    @IsNumber()
    @IsPositive()
    precio: number;

    @IsString()
    publishedDate: string;

    @IsString()
    @IsOptional()
    thumbnailUrl?: string;

    @IsString()
    @IsOptional()
    shortDescription?: string;

    @IsString()
    @IsOptional()
    longDescription?: string;

    @IsString()
    @MinLength(1)
    @IsIn(['PUBLISH', 'UNPUBLISH'])
    status: string;

    @IsString()
    idCliente?: string;

}

