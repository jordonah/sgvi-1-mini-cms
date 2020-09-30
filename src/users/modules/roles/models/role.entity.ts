import { BaseAbstractEntity } from "src/global/base-abstract.entity";
import { Column, Entity, Generated, JoinColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { User } from "../../../models/user.entity";

@Entity()
export class Role extends BaseAbstractEntity{

    @Column()
    @Generated("uuid")
    uuid: string

    @Column({unique: true})
    name: string

    @Column()
    description: string

    @JoinTable()
    @ManyToMany(type => User)
    user: User    
}