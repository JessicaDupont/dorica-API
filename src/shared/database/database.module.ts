import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ENV } from '../env';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: ENV.DB.host,
            port: ENV.DB.port,
            username: ENV.DB.username,
            password: ENV.DB.password,
            database: ENV.DB.database,
            entities: [],
            synchronize: true,//mettre a false en prod
        }),
    ]
})
export class DatabaseModule { }
