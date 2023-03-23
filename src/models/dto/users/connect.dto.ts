import { PickType } from "@nestjs/swagger";
import { UserDTO } from "./user.dto";

export class UserConnectDTO extends PickType(
    UserDTO,
    [
        'email',
        'password'
    ]
){}