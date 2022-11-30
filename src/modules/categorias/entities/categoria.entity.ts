import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Libro } from '../../libros/entities/libro.entity';

@Entity()
export class Categoria {

   @PrimaryGeneratedColumn('uuid')
   id:string;
   
   @Column('text', {unique: true})
   name: string


    @OneToMany(
        () => Libro,
        (Libro) => Libro.categoria,
        { cascade: false }
    )
    libros?:Libro[]

}
