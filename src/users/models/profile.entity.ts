import { BaseAbstractEntity } from "src/global/base-abstract.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Profile extends BaseAbstractEntity{
    @Column()
    homeAddress: string

    @Column()
    Nationality: string  
    
    @Column()
    stateOfOrigin: string

    @Column()
    photo: string

    @OneToOne(type => User, user => user.Profile, {cascade: true})
    user: User
}
