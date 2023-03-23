import { IMail } from "./mail.interface";
import { MailsFR } from "./mails.fr";
import { IMails } from "./mails.interface";

export class Mails implements IMails{
    mails:IMails;
    
    constructor(){
        this.mails = new MailsFR();
    }
    userToValidateEmail(email: string, code: number): IMail {
        return this.mails.userToValidateEmail(email, code);
    }
    
}