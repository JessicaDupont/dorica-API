# NestJS
[:books: Documentation officielle : www.nestjs.com](https://docs.nestjs.com/)
1. [Initialisation](#1-initialisation)
    1. [Création](#11-création-projet)
    2. [Git](#12-gitt)
    3. [.env](#13-env)
    4. [DB](#14-connexion-db-typeorm)
        1. [MySQL](#141-mysql)

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