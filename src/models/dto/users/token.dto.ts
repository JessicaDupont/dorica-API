import { IsNotEmpty, MaxLength } from "class-validator";

export class UserTokenDTO {

    constructor(key:string){
        this.dorica_user_jwt = key;
    }

    @MaxLength(255)
    @IsNotEmpty()
    dorica_user_jwt: string
}