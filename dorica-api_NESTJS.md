# NestJS
[:books: Documentation officielle : www.nestjs.com](https://docs.nestjs.com/)
1. [Initialisation](#1-initialisation)
    1. [Création](#11-création-projet)
    2. [Git](#12-git)
    3. [.env](#13-env)
    4. [DB](#14-connexion-db-typeorm)
        1. [MySQL](#141-mysql)
    5. [Swagger](#15-swagger)
2. [Users|Clients](#2-users)
    1. [Models](#21-models)
        1. [Entities](#211-entity)
        2. [DTO](#212-dto)
    2. [Module](#22-module)
        1. [Controller](#221-controller)
        2. [Service](#222-service)
3. [Middleware](#3-middlewares)
    1. [Authentification](#31-authentification)
4. [Outils](#4-outils)
    1. [Mailer](#41-mailer)

[:top: Remonter](#nestjs)
# 1. Initialisation
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
2. `nest g module data/mysql` + code dans le imports de `mysql.module.ts`
3. pour chaque module utilisant la DB, ajouter dans `imports`
    ```ts
    TypeOrmModule.forFeature([/*nom du modele*/])
    ```
## 1.5. Swagger
[:books Documentation](https://docs.nestjs.com/openapi/introduction)
1. `npm i --save @nestjs/swagger`
2. créer le dossier `shared/swagger`
3. créer le fichier `swagger.config.ts` dans le précédent dossier
4. dans `doric-api/src/main.ts`, ajouter
    ```ts
    const document = SwaggerModule.createDocument(app, swaggerConfig);//swagger config fait appel à la constante de swagger.config.ts
    SwaggerModule.setup('', app, document);//le texte entre '' donne la route pour voir swagger
    ```
5. swagger est disponible à [http://localhost:3000]()
6. l'équivalent du `swagger.json` est disponible à [http://localhost:3000/-json]()

# 2. Users
[:top: Remonter](#nestjs)
1. [Module](#21-module)
2. [Models](#22-models)
3. [Controller](#23-controller)
4. [Service](#24-service)
## 2.1. Models
1. créer un dossier `src/models`
### 2.1.1. Entity
[:books: Documentation](https://typeorm.io/entities)
1. créer une dossier `entities` dans le dossier `models`
2. créer un fichier `user.entity.ts` dans le dossier précédent
3. définir les champs de l'entité en DB et utiliser les décorateurs de TypeORM
### 2.1.2. DTO
[:books: Documentation](https://www.npmjs.com/package/class-validator)
1. ajouter un dossier `dto` dans `models`
2. ajouter un dossier `users` dans `dto`
3. ajouter un fichier `user.dto.ts` avec une classe qui reprend tout les éléments d'un utilisateur
4. `npm i --save class-validator class-transformer`
5. ajouter des décorateurs au-dessus des éléments afin d'assurer une validation
## 2.2. Module
[:books: Documentation](https://docs.nestjs.com/modules)
1. `nest g module _users`
### 2.2.1. Controller
1. `nest g controller _users`
2. lister les méthodes "endPoint" du controlleur.
3. Y ajouter les décorateurs (`@Post`, `@Get`, ...)
4. ajouter les paramêtres d'entrée à  l'aide des décorateurs (`@Ip()`, `@Body()`, ...)
5. faire appel à la méthode correspondante du service
    1. ajouter le service via l'injection de dépendance dnas le constructeur
    2. utiliser le service pour retrouner chaque méthode
6. ajouter les décorateurs Swagger (`@ApiOperation()`, `@ApiResponses()`, ...)
### 2.2.2. Service

# 3. Middlewares
## 3.1. Authentification
[:books: Documentation](https://docs.nestjs.com/security/authentication)
1. `npm i --save @nestjs/passport passport passport-local`
2. `npm i --save-dev @types/passport-local` identification par login/password
3. `npm i --save @nestjs/jwt passport-jwt`
4. `npm i --save-dev @types/passport-jwt`
5. `nest g module middlewares/auth`
6. `nest g service middlewares/auth`

# 4. Outils
## 4.1. Mailer
1. `npm i --save @nestjs-modules/mailer nodemailer`
2. `npm i --save pug` 
    * ou `npm i --save handlebars` 
    * ou `npm i --save ejs`
3. `nest g module mail` + code dans import de `mail.module.ts`
4. `nest g service mail` + code dans service