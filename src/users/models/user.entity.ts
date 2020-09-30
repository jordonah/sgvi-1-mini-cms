import { BaseAbstractEntity } from "src/global/base-abstract.entity";
import { Column, Entity, Generated, ManyToMany, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Profile } from "./profile.entity";

@Entity()
export class User extends BaseAbstractEntity{
    @Generated("uuid")
    uuid: string;

    @Column()
    firstName: string

    @Column()
    middleName: string

    @Column()
    lastName: string

    @Column()
    commonName: string

    @Column()
    gender: string

    @Column()
    dateOfBirth: Date

    @Column({default: false})
    isActive: boolean

    @Column({unique: true})
    primaryEmailAddress: string

    @Column()
    isPrimaryEmailAddressVerified: boolean

    @Column()
    passwordSalt: string

    @Column()
    passwordHash: string

    @Column()
    isPasswordChangeRequired: boolean

    @Column()
    resetPasswordToken: string

    @Column()
    resetPasswordExpiration: Date

    @Column()
    primaryEmailVerificationToken: string

    @Column()
    otpEnabled: boolean

    @Column()
    otpSecret: string

    @JoinColumn()
    @OneToOne(type => Profile, profile => profile.user)
    Profile: Profile

}