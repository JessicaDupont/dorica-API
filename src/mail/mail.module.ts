import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { Module } from '@nestjs/common';
import { ENV } from 'src/shared/env';
import { MailService } from './mail.service';

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: ENV.MAIL.SMTP.serveur,
                port: ENV.MAIL.SMTP.port,
                secure: false,
                auth: {
                  user: ENV.MAIL.USER.NOREPLY.username,
                  pass: ENV.MAIL.USER.NOREPLY.password
                },
                //ignoreTLS: true,
                requireTLS: true,
                tls: {
                    rejectUnauthorized: false
                }
            },
            defaults:{
                from: '"No Reply" <'+ENV.MAIL.USER.NOREPLY.username+'>'
            },
            //preview: true,
            template: {
                dir: process.cwd() + '/template/',
                adapter: new PugAdapter(),
                options: {
                    strict: true
                }
            }
        }),
    ],
    providers: [MailService],
    exports: [MailService]
})
export class MailModule {}
