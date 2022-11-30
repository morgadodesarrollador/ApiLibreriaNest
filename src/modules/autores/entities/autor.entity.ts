import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Libro } from '../../libros/entities/libro.entity';

@Entity()
export class Autor {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column('text', {unique: true})
    name: string
 

    @OneToMany(
        () => Libro,
        (Libro) => Libro.autor,
        { cascade: false }
    )

    libros?:Libro
}
