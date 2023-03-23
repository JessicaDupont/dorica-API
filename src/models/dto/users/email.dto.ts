import { PickType } from "@nestjs/swagger";
import { UserDTO } from "./user.dto";

export class UserEmailDTO extends PickType(
    UserDTO,
    [
        'email'
    ]
){}