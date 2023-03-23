import { IMail } from "./mail.interface";

export interface IMails{
    userToValidateEmail(email:string, code:number) : IMail;
}