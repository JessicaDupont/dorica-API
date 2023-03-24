import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailService } from 'src/mail/mail.service';
import { AuthModule } from 'src/middlewares/auth/auth.module';
import { AuthService } from 'src/middlewares/auth/auth.service';
import { UserEntity } from 'src/models/entities/user.entity';
import { UsersController } from './_users.controller';
import { UsersService } from './_users.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
    ],
    controllers: [
        UsersController
    ],
    providers: [
        UsersService, 
        MailService,
        AuthService,
        JwtService
    ]
})
export class UsersModule {}
