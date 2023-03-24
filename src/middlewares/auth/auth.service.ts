import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserTokenDTO } from 'src/models/dto/users/token.dto';
import { UserEntity } from 'src/models/entities/user.entity';
import { ENV } from 'src/shared/env';
import { JwtStrategy } from './jwt/strategy';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) { }

  login(user: UserEntity) : UserTokenDTO {
    return new UserTokenDTO(this.jwtService.sign({sub: user.userId}, {secret: ENV.KEY.user}));
  }
  getUserId(token: string = null): number {
    if (JwtStrategy.userId == null || JwtStrategy.userId == undefined) {
      let tok = token.substring(7)//Bearer_ = 7
      let res = this.jwtService.decode(tok)
      JwtStrategy.userId = res.sub;
    }
    return JwtStrategy.userId;
  }

}
