import { IsNotEmpty, MaxLength } from "class-validator";

export class UserTokenDTO {
    @MaxLength(255)
    @IsNotEmpty()
    jwt_dorica_user: string
}