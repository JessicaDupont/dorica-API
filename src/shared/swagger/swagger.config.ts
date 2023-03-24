import { DocumentBuilder } from "@nestjs/swagger";

export const SwaggerConfig = new DocumentBuilder()
    .setTitle('DoricAPI')
    .setDescription('API fournissant les informations sur Dorica RPG')
    .setVersion('1.0')
    .setContact(
        "Jessica Dupont",
        "http://www.api.dorica.miss-ica.be",
        "contact@jessicadupont.net"
    )
    //.addTag('Clients', "Liste des FRONT utilisant l'API")
    .addTag('Users', "Personnes utilisant l'API")
    .addBearerAuth({
        type: 'http',
        name: 'Bearer',
        bearerFormat: "Bearer",
        in: 'Header',
        scheme: "Bearer"
    }, "dorica_user_jwt")
    .build();