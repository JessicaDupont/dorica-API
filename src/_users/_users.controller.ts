import { Body, Controller, Delete, Get, Ip, Param, Patch, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserConnectDTO } from 'src/models/dto/users/connect.dto';
import { UserCreateDTO } from 'src/models/dto/users/create.dto';
import { UserEmailDTO } from 'src/models/dto/users/email.dto';
import { UserPutDTO } from 'src/models/dto/users/put.dto';
import { UserTokenDTO } from 'src/models/dto/users/token.dto';
import { UserDTO } from 'src/models/dto/users/user.dto';
import { UsersService } from './_users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(
        private readonly userS: UsersService
    ) { }

    @Post('register')
    register(
        @Ip() ip: string,
        @Body(ValidationPipe) user: UserCreateDTO
    ) { return this.userS.register(ip, user); }

    @Get(':email/:code')
    validate(
        @Ip() ip: string,
        @Param('email') email: string,
        @Param('code') code: number
    ) { return this.userS.validate(ip, email, code); }

    @Post('connect')
    connect(
        @Ip() ip: string,
        @Body(ValidationPipe) user: UserConnectDTO
    ): UserTokenDTO { return this.userS.connect(ip, user) }

    @Get('profil')
    getMe(
        @Ip() ip: string
    ): UserDTO { return this.userS.getMe(ip); }

    @Get(':id')
    get1(
        @Ip() ip: string,
        @Param('id') userId: number
    ): UserDTO { return this.userS.get1(ip, userId); }

    @Get('all')
    getAll(
        @Ip() ip: string
    ): UserDTO[] { return this.userS.getAll(ip); }

    @Put('profil')
    putMe(
        @Ip() ip: string,
        @Body(ValidationPipe) user: UserPutDTO
    ) { return this.userS.putMe(ip, user); }

    @Put(':id')
    put1(
        @Ip() ip: string,
        @Param('id') userId: number,
        @Body(ValidationPipe) user: UserPutDTO
    ) { return this.userS.put1(ip, userId, user); }

    @Patch(':email')
    email(
        @Ip() ip: string,
        @Body(ValidationPipe) email:UserEmailDTO
    ) { return this.userS.email(ip, email); }

    @Patch('reset/:email')
    restPassword(
        @Ip() ip: string,
        @Param('email') email: string
    ) { return this.userS.reset(ip, email); }

    @Patch('password/:password')
    password(
        @Ip() ip:string,
        @Param('password') password:string
    ){return this.userS.password(ip, password);}

    @Delete('profil')
    deleteMe(
        @Ip() ip:string
    ){return this.userS.deleteMe(ip);}

    @Delete(':id')
    delete1(
        @Ip() ip:string,
        @Param('id') userId:number
    ){return this.userS.delete1(ip, userId);}
}
