import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { IMail } from 'src/shared/content/mail/mail.interface';
import { Mails } from 'src/shared/content/mail/mails';
import { IMails } from 'src/shared/content/mail/mails.interface';
import { ENV } from 'src/shared/env';

@Injectable()
export class MailService {
    mails: IMails;
    
    constructor(
        private readonly mailerS: MailerService
    ){
        this.mails = new Mails();
    }
    sendWithNoReply(to:string, content:IMail){
        this.mailerS.sendMail({
            to: to,
            from: ENV.MAIL.USER.NOREPLY.username,
            subject: content.subject,
            text: content.text,
            html: content.html
        })
        // .then(()=>{console.log("le mail a bien été envoyé par no-reply")})
        // .catch((err)=>{console.log("erreur envoi mail par no-reply", err)})
    }
}
