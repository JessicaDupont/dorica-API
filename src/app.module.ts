import { Module } from '@nestjs/common';
import { UsersModule } from './_users/_users.module';
import { MysqlModule } from './data/mysql/mysql.module';
import { MailModule } from './mail/mail.module';
import { AuthModule } from './middlewares/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      ignoreEnvFile:false,
      envFilePath: '.env'
    }),
    MysqlModule, 
    AuthModule,
    MailModule, 
    UsersModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
