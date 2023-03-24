import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ENV } from "src/shared/env";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: ENV.KEY.user
    });
  }

  static "userId": number = null;

  async validate(payload: any) {
    JwtStrategy.userId = payload.sub;
    return { userId: payload.sub }
  }
}