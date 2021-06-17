import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pet {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    breed: string;

    @Column()
    age: number;

    @Column()
    nextCheckupDate: string;
}