import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ENV } from 'src/shared/env';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt/strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: ENV.KEY.user,
      signOptions : {expiresIn: '1h'}
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
  ],
  exports:[
    AuthModule
  ]
})
export class AuthModule {}
