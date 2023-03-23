import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ENV } from 'src/shared/env';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: ENV.DB.host,
            port: ENV.DB.port,
            username: ENV.DB.username,
            password: ENV.DB.password,
            database: ENV.DB.database,
            entities: [__dirname + "/**/*.entity.{ts, js}"],
            autoLoadEntities: true,//uniquement la première fois, sinon écrase
            synchronize: true,//mettre a false en prod
            //logging: "all"//affiche les requetes envoyée en DB dans la console
        }),]
})
export class MysqlModule { }
