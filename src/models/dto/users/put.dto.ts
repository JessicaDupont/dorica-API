import { PickType } from "@nestjs/swagger";
import { UserDTO } from "./user.dto";

export class UserPutDTO extends PickType(
    UserDTO,
    [
        'email',
        'password',
        'role',
        'profilComment'
    ]
){}