import { Module } from '@nestjs/common';
import { MysqlModule } from './shared/data/mysql/mysql.module';

@Module({
  imports: [MysqlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
