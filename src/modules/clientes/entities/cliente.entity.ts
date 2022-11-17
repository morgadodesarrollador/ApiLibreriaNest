import { Libro } from "src/modules/libros/entities/libro.entity";
import { Profile } from "src/modules/profile/entities/profile.entity";
import { BeforeInsert, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn('uuid')
    id: string;

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

    @OneToOne(
        (type) => Profile,
        (profile) => profile.cliente,
        { cascade: false }
    )
    profile?: Profile;

    @OneToMany(
        () => Libro,
        (Libro) => Libro.cliente,
        { cascade: false, eager: false  }

        // { cascade: false, eager: true  }
    )
    libros?: Libro[];



    @BeforeInsert()
    checkGithub(){
        if (!this.github.includes('https://github.com/')){
            this.github = `https://github.com/${this.github}`
        }
    }

   
}