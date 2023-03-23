export const ENV = {
    "host" : process.env.HOST ?? process.env.LOCAL_HOST ?? "localhost",
    "port" : process.env.PORT ?? process.env.LOCAL_PORT ?? 3000,
    "domain" : "http://localhost:3000",
    "DB" : {
        "host": process.env.DB_HOST ?? process.env.LOCAL_DB_HOST ?? "127.0.0.1",
        "port": parseInt(process.env.DB_PORT ?? process.env.LOCAL_DB_PORT ?? "3306", 10),
        "username": process.env.DB_USERNAME ?? process.env.LOCAL_DB_USERNAME ?? "doricapi",
        "password": process.env.DB_PASSWORD ?? process.env.LOCAL_DB_PASSWORD ?? "dorica",
        "database": process.env.DB_NAME ?? process.env.LOCAL_DB_NAME ?? "dorica"
    },
    "JWT" : {
        "user" : process.env.JWT_SECRET_KEY_USER
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