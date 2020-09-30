import { BaseAbstractEntity } from "src/global/base-abstract.entity";
import { Column, Entity, Generated, JoinColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Role } from "../../roles/models/role.entity";

@Entity()
export class Permission extends BaseAbstractEntity{

    @Column()
    @Generated("uuid")
    uuid: string

    @Column({unique: true})
    name: string

    @Column()
    description: string

    @JoinTable()
    @ManyToMany(type => Role)
    role: Role


}