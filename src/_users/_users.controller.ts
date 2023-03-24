import { Body, Controller, Delete, Get, Ip, Param, Patch, Post, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/middlewares/auth/jwt/auth.guard';
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
    async connect(
        @Ip() ip: string,
        @Body(ValidationPipe) user: UserConnectDTO
    ): Promise<UserTokenDTO> { return await this.userS.connect(ip, user) }

    @Get('profil')
    @UseGuards(JwtAuthGuard) @ApiBearerAuth("dorica_user")
    getMe(
        @Ip() ip: string
    ): UserDTO { return this.userS.getMe(ip); }

    @Get(':id')
    @UseGuards(JwtAuthGuard) @ApiBearerAuth("dorica_user")
    get1(
        @Ip() ip: string,
        @Param('id') userId: number
    ): UserDTO { return this.userS.get1(ip, userId); }

    @Get('all')
    @UseGuards(JwtAuthGuard) @ApiBearerAuth("dorica_user")
    getAll(
        @Ip() ip: string
    ): UserDTO[] { return this.userS.getAll(ip); }

    @Put('profil')
    @UseGuards(JwtAuthGuard) @ApiBearerAuth("dorica_user")
    putMe(
        @Ip() ip: string,
        @Body(ValidationPipe) user: UserPutDTO
    ) { return this.userS.putMe(ip, user); }

    @Put(':id')
    @UseGuards(JwtAuthGuard) @ApiBearerAuth("dorica_user")
    put1(
        @Ip() ip: string,
        @Param('id') userId: number,
        @Body(ValidationPipe) user: UserPutDTO
    ) { return this.userS.put1(ip, userId, user); }

    @Patch(':email')
    @UseGuards(JwtAuthGuard) @ApiBearerAuth("dorica_user")
    email(
        @Ip() ip: string,
        @Body(ValidationPipe) email:UserEmailDTO
    ) { return this.userS.email(ip, email); }

    @Patch('reset/:email')
    resetPassword(
        @Ip() ip: string,
        @Param('email') email: string
    ) { return this.userS.reset(ip, email); }

    @Patch('password/:password')
    @UseGuards(JwtAuthGuard) @ApiBearerAuth("dorica_user")
    password(
        @Ip() ip:string,
        @Param('password') password:string
    ){return this.userS.password(ip, password);}

    @Delete('profil')
    @UseGuards(JwtAuthGuard) @ApiBearerAuth("dorica_user")
    deleteMe(
        @Ip() ip:string
    ){return this.userS.deleteMe(ip);}

    @Delete(':id')
    @UseGuards(JwtAuthGuard) @ApiBearerAuth("dorica_user")
    delete1(
        @Ip() ip:string,
        @Param('id') userId:number
    ){return this.userS.delete1(ip, userId);}
}
