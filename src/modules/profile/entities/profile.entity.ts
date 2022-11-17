import { Cliente } from "src/modules/clientes/entities/cliente.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn('uuid')
    profileId: string;

    @Column('text', { unique: true })
    email: string;

    @Column('text')
    password?: string;

    @Column('text', { nullable: true })
    github: string;

    @Column('text', { nullable: true })
    twitter: string;

    @Column('text',{ nullable: true })
    website: string;

    @OneToOne(
        () => Cliente,
        (cliente) => cliente.profile
    )
    @JoinColumn()
    cliente?: Cliente 

}
