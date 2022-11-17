import { profile } from "console";
import { Profile } from "src/modules/profile/entities/profile.entity";
import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from '../../clientes/entities/cliente.entity';

@Entity()
export class Libro {

    @PrimaryGeneratedColumn('uuid')
    idCliente: string;

    @Column('text', { 
        unique: true
    })
    title: string;

    @Column('text', { 
        unique: true
    })
    isbn: string;

    @Column({
        type: 'int',
        default: 0
    } )
    pageCount: number;

    @Column('date')
    publishedDate: string;

    @Column('text' )
    thumbnailUrl: string;

    @Column('text',{
        nullable: true
    } )
    shortDescription: string;

    @Column('text', {
        nullable: true
    } )
    longDescription: string;

    @Column('text' )
    status: string;

    @Column('numeric', {
        nullable: true
    })
    precio: number;

    @ManyToOne(
        () => Cliente,
        (cliente) => cliente.libros,
        { cascade: false }
    )
    cliente?: Cliente

    

    @BeforeInsert()
    checkTitle(){
        this.title = this.title.toUpperCase()
    }

    @BeforeInsert()
    precioIva(){
        this.precio = this.precio*1.21;
    }







}
