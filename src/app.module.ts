import { Module } from '@nestjs/common';
import { UsersModule } from './_users/_users.module';
import { MysqlModule } from './data/mysql/mysql.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [MysqlModule, UsersModule, MailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
