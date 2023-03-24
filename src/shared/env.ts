import { ConfigService } from "@nestjs/config"

// const configS = new ConfigService();
export class ENV_CLASS{
    constructor(
        private configS: ConfigService
    ){}
    SERVER = {
        "host" :  this.configS.get('HOST') ?? this.configS.get('LOCAL_HOST'),
        "port" :  this.configS.get('PORT') ?? this.configS.get('LOCAL_PORT'),
        "domain" : "http://localhost:3000",
    };
    DB = {
        "host": this.configS.get('DB_HOST') ?? this.configS.get('LOCAL_DB_HOST'),
        "port": parseInt(this.configS.get('DB_PORT') ?? this.configS.get('LOCAL_DB_PORT'), 10),
        "username": this.configS.get('DB_USERNAME') ?? this.configS.get('LOCAL_DB_USERNAME'),
        "password": this.configS.get('DB_PASSWORD') ?? this.configS.get('LOCAL_DB_PASSWORD'),
        "database": this.configS.get('DB_NAME') ?? this.configS.get('LOCAL_DB_NAME')
    };
    KEY = {
        "user" : this.configS.get('SECRET_KEY_USER_JWT') ?? "untokenpourlesgouvernertous"
    };
    MAIL = {
        "SMTP" : {
            "serveur" : this.configS.get('MAIL_SMTP_SERVEUR'),
            "port" : parseInt(this.configS.get('MAIL_SMTP_PORT_SECURE') ?? this.configS.get('MAIL_SMTP_PORT'), 10)
        },
        "IMAP" : {
            "serveur" : this.configS.get('MAIL_IMAP_SERVEUR') ?? "mail.miss-ica.be",
            "port" : parseInt(this.configS.get('MAIL_IMAP_PORT_SECURE') ?? this.configS.get('MAIL_IMAP_PORT'), 10)
        },
        "POP3" : {
            "serveur" : this.configS.get('MAIL_POP3_SERVEUR') ?? "mail.miss-ica.be",
            "port" : parseInt(this.configS.get('MAIL_POP3_PORT_SECURE') ?? this.configS.get('MAIL_POP3_PORT'), 10)
        },
        "USER" : {
            "NOREPLY" : {
                "username" : this.configS.get('MAIL_USER_NOREPLY_USERNAME'),
                "password" : this.configS.get('MAIL_USER_NOREPLY_PASSWORD')
            }
        }
    };
}
export const ENV = {
    "SERVER" : {
        "host" : process.env.HOST ?? process.env.LOCAL_HOST ?? "localhost",
        "port" : process.env.PORT ?? process.env.LOCAL_PORT ?? 3000,
        "domain" : "http://localhost:3000",
    },
    "DB" : {
        "host": process.env.DB_HOST ?? process.env.LOCAL_DB_HOST ?? "127.0.0.1",
        "port": parseInt(process.env.DB_PORT ?? process.env.LOCAL_DB_PORT ?? "3306", 10),
        "username": process.env.DB_USERNAME ?? process.env.LOCAL_DB_USERNAME ?? "doricapi",
        "password": process.env.DB_PASSWORD ?? process.env.LOCAL_DB_PASSWORD ?? "dorica",
        "database": process.env.DB_NAME ?? process.env.LOCAL_DB_NAME ?? "dorica"
    },
    "KEY" : { 
        "user" : process.env.SECRET_KEY_USER_JWT ?? "untokenpourlesgouvernertous"
    },
    "MAIL" : {
        "SMTP" : {
            "serveur" : process.env.MAIL_SMTP_SERVEUR ?? "mail.miss-ica.be",
            "port" : parseInt(process.env.MAIL_SMTP_PORT_SECURE ?? process.env.MAIL_SMTP_PORT ?? "587", 10)
        },
        "IMAP" : {
            "serveur" : process.env.MAIL_IMAP_SERVEUR ?? "mail.miss-ica.be",
            "port" : parseInt(process.env.MAIL_IMAP_PORT_SECURE ?? process.env.MAIL_IMAP_PORT ?? "143", 10)
        },
        "POP3" : {
            "serveur" : process.env.MAIL_POP3_SERVEUR ?? "mail.miss-ica.be",
            "port" : parseInt(process.env.MAIL_POP3_PORT_SECURE ?? process.env.MAIL_POP3_PORT ?? "110", 10)
        },
        "USER" : {
            "NOREPLY" : {
                "username" : process.env.MAIL_USER_NOREPLY_USERNAME ?? "no-reply@miss-ica.be",
                "password" : process.env.MAIL_USER_NOREPLY_PASSWORD ?? "-E%9*1&F0-J4"
            }
        }
    }
}