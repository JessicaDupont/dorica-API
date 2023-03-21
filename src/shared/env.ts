export const ENV = {
    "port" : process.env.PORT ?? process.env.LOCAL_PORT ?? "3000",
    "DB" : {
        "host": process.env.DB_HOST ?? process.env.LOCAL_DB_HOST_LOCAL ?? "127.0.0.1",
        "port": parseInt(process.env.DB_PORT ?? process.env.LOCAL_DB_PORT ?? "3306", 10),
        "username": process.env.DB_USERNAME ?? process.env.LOCAL_DB_USERNAME ?? "doricapi",
        "password": process.env.DB_PASSWORD ?? process.env.LOCAL_DB_PASSWORD ?? "dorica",
        "name": process.env.DB_NAME ?? process.env.LOCAL_DB_NAME ?? "dorica"
    },
    "JWT" : {
        "user" : process.env.JWT_SECRET_KEY_USER
    },
    "MAIL" : {
        "SMTP" : {
            "serveur" : process.env.MAIL_SMTP_SERVEUR,
            "port" : process.env.MAIL_SMTP_PORT_SECURE ?? process.env.MAIL_SMTP_PORT
        },
        "IMAP" : {
            "serveur" : process.env.MAIL_IMAP_SERVEUR,
            "port" : process.env.MAIL_IMAP_PORT_SECURE ?? process.env.MAIL_IMAP_PORT
        },
        "POP3" : {
            "serveur" : process.env.MAIL_POP3_SERVEUR,
            "port" : process.env.MAIL_POP3_PORT_SECURE ?? process.env.MAIL_POP3_PORT
        },
        "USER" : {
            "NOREPLY" : {
                "username" : process.env.MAIL_USER_NOREPLY_USERNAME,
                "password" : process.env.MAIL_USER_NOREPLY_PASSWORD
            }
        }
    }
}