import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailService } from 'src/mail/mail.service';
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
        MailService
    ]
})
export class UsersModule {}
