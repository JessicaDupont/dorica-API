import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsBoolean, IsDate, IsDefined, IsEmail, IsEnum, IsNotEmpty, IsStrongPassword, Length, MaxLength } from "class-validator";
import { UserRoleEnum } from "src/models/entities/user.entity";

export class UserDTO{
    @ApiProperty({
        required: false
    })
    @IsInt()
    userId:number;

    @ApiProperty({
        required: true,
        format: "email",
        pattern: "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$",
        example: "jessica.dupont1990@gmail.com"
    })
    @IsEmail()
    @MaxLength(255)
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        required: true,
        example: "123stringSTRING/*-"
    })
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    })
    @MaxLength(255)
    @IsNotEmpty()
    password: string;

    @ApiProperty({enum: UserRoleEnum})
    @IsEnum(UserRoleEnum)
    role: UserRoleEnum;

    @ApiProperty({
        required: false,
        format: "date"
    })
    @IsDate()
    lastConnexion : Date;

    @MaxLength(255)
    profilComment: string;
}