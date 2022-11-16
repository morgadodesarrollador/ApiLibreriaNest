import { Libro } from "src/modules/libros/entities/libro.entity";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text', { unique: true} )
    name: string;

    @Column('text', { unique: true })
    email: string;

    @Column('text', { nullable: true })
    github: string;

    @Column('text', { nullable: true })
    twitter: string;

    @Column('text',{ nullable: true })
    website: string;

    @OneToMany(
        () => Libro,
        (Libro) => Libro.cliente,
        { cascade: false }
    )
    libros?: Libro[];



    @BeforeInsert()
    checkGithub(){
        if (!this.github.includes('https://github.com/')){
            this.github = `https://github.com/${this.github}`
        }
    }

   
}