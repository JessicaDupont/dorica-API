# NestJS
[:books: Documentation officielle : www.nestjs.com](https://docs.nestjs.com/)
1. [Initialisation](#1-initialisation)
    1. [Création](#11-création-projet)
    2. [Git](#12-gitt)
    3. [.env](#13-env)
    4. [DB](#14-connexion-db-typeorm)
        1. [MySQL](#141-mysql)
    5. [Swagger](#15-swagger)

[:top: Remonter](#nestjs)
## 1.1. Création projet
1. `ctrl`+`ù` : terminal
2. `npm i -g @nestjs/cli`
3. `nest new doricAPI`
    - `npm`
4. `cd doric-api`
5. `npm run start:dev` : app lancée sur [http://localhost:3000]()
6. `ctrl`+`c` : arreter le programme
## 1.2. Git
[Github.com : JessicaDupont/dorica-api](https://github.com/JessicaDupont/dorica-api)
## 1.3. .env
1. dans `dorica-api/`, créer une fichier `.env`
2. dans `doric-api/.gitignore`, ajouter `.env`
3. créer un dossier `src/shared`
4. dans le précédent dossier, créer un fichier `env.ts`
## 1.4. Connexion DB TypeORM
[:books: Documentation](https://typeorm.io/)
1. [MySQL](#141-mysql)

### 1.4.1. MySQL
1. `npm i --save @nestjs/typeorm typeorm mysql2`
2. dans `doric-api/src/app.module.ts`, dans `imports`
3. pour chaque module utilisant la DB, ajouter dans `imports`
    ```ts
    TypeOrmModule.forFeature([/*nom du modele*/])
    ```
## 1.5. Swagger
[:books Documentation](https://docs.nestjs.com/openapi/introduction)
1. `npm i --save @nestjs/swagger`
2. dans `doric-api/src/main.ts`, ajouter
    ```ts
    const swaggerConfig = new DocumentBuilder()
        .setTitle('DoricAPI')
        .setDescription('API fournissant les informations sur Dorica RPG')
        .setVersion('1.0')
        .setContact(
            "Jessica Dupont", 
            "http://alagaesiAPI.jessicadupont.net", 
            "contact@jessicadupont.net"
        )
        .addTag('Clients', "Clients de l'API")
        .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api', app, document);
    ```
3. swagger est disponible à [http://localhost:3000/api]()
4. l'équivalent du `swagger.json` est disponible à [http://localhost:3000/api-json]()