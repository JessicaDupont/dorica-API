import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LifeTime } from "./bases/lifeTime.entity";

export enum UserRoleEnum{
    ADMIN = "admin",//peut tout faire
    EDITOR = "editor",//peut tout faire, sauf grer les utilisateurs
    USER = "user"//peut juste lire et modifier son compte
}

@Entity({name: "users"})
export class UserEntity extends LifeTime{
    @PrimaryGeneratedColumn({
        type: "int",
        name: "user_id"
    })
    userId: number;

    @Column({
        type: "varchar",
        length: 255,
        unique: true
    })
    email: string;

    @Column({
        type: "boolean",
        name: "is_validate",
        default: false
    })
    emailIsValidate: boolean;

    @Column({
        type: "varchar",
        length: 255
    })
    password:string;
    
    @Column({
        type: "enum",
        enum: UserRoleEnum,
        default: UserRoleEnum.USER
    })
    role: UserRoleEnum;
    
    @Column({
        type: "date",
        name: "last_connexion"
    })
    lastConnexion: Date;
    
    @Column({
        type: "boolean",
        name: "is_restricted",
        default: false
    })
    profilIsRestricted: boolean;

    @Column({
        type: "varchar",
        length: 255
    })
    profilComment: string
}