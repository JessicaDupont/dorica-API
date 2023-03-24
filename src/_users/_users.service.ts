import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserConnectDTO } from 'src/models/dto/users/connect.dto';
import { UserCreateDTO } from 'src/models/dto/users/create.dto';
import { UserEmailDTO } from 'src/models/dto/users/email.dto';
import { UserPutDTO } from 'src/models/dto/users/put.dto';
import { UserEntity, UserRoleEnum } from 'src/models/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { IHttpResponses } from 'src/shared/content/httpResponses/httpResponses.interface';
import { HttpResponses } from 'src/shared/content/httpResponses/httpResponses';
import { MailService } from 'src/mail/mail.service';
import { UserDTO } from '../models/dto/users/user.dto';
import { UserTokenDTO } from '../models/dto/users/token.dto';
import { AuthService } from 'src/middlewares/auth/auth.service';

@Injectable()
export class UsersService {
    httpRes: IHttpResponses = new HttpResponses();

    constructor(
        @InjectRepository(UserEntity) private userR: Repository<UserEntity>,
        private readonly mailS: MailService,
        private readonly authS:AuthService
    ) { }

    /**
     * @returns peut retourner une erreur
     */
    private async create(user: UserCreateDTO) {
        let userC = await this.userR.create(user);
        await this.userR.save(userC);
    }
    private async recover(user: UserEntity) { //reactivate
        await this.userR.recover(user);
    }
    /**
     * @returns TRUE = est actif, FALSE = est inactif, NULL = n'existe pas
     */
    private async existByEmail(email: string): Promise<boolean> {
        let result = await this.userR.findOneOrFail({
            withDeleted: true,
            where: {
                email: email
            }
        }).catch(e => { return null; })

        if (result == null) { return null; }
        else if (result.deleteAt === null) { return true; }
        else { return false; }
    }
    private read1ById(): UserEntity { return null; }
    /**
     * @returns userEntity ou null si aucune correspondance
     */
    private async read1ByEmail(email: string): Promise<UserEntity> {
        let result = await this.userR.findOneOrFail({
            withDeleted: true,
            where: {
                email: email
            }
        }).catch(e => { return null; })
        return result;
    }
    private readAll(): UserEntity[] { return null; }
    /**
     * @returns peut retourner une erreur
     */
    private async update(user: UserEntity) {
        await this.userR.save(user);
    }
    private softDelete() { }

    delete1(ip: string, userId: number) {
        throw new Error('Method not implemented.');
    }
    deleteMe(ip: string) {
        throw new Error('Method not implemented.');
    }
    password(ip: string, password: string) {
        throw new Error('Method not implemented.');
    }
    reset(ip: string, email: string) {
        throw new Error('Method not implemented.');
    }
    email(ip: string, email: UserEmailDTO) {
        throw new Error('Method not implemented.');
    }
    put1(ip: string, userId: number, user: UserPutDTO) {
        throw new Error('Method not implemented.');
    }
    putMe(ip: string, user: UserPutDTO) {
        throw new Error('Method not implemented.');
    }
    getAll(ip: string): UserDTO[] {
        throw new Error('Method not implemented.');
    }
    get1(ip: string, userId: number): UserDTO {
        throw new Error('Method not implemented.');
    }
    getMe(ip: string): UserDTO {
        throw new Error('Method not implemented.');
    }
    async connect(ip: string, user: UserConnectDTO): Promise<UserTokenDTO> {
        let userE:UserEntity;
        switch (await this.existByEmail(user.email)) {
            case true:
                userE = await this.read1ByEmail(user.email);
                if(await bcrypt.compare(user.password, userE.password)){
                    userE.lastConnexion = new Date();
                    await this.update(userE);
                    return await this.authS.login(userE);
                }
            case false:
            default:
                return this.httpRes.userNotFound(user.email);
        }
    }
    async validate(ip: string, email: string, code: number) {
        let userE:UserEntity;
        switch (await this.existByEmail(email)) {
            case true:
                userE = await this.read1ByEmail(email);
                if(code == this.codeValidation(userE)){
                    userE.emailIsValidate = true;
                    await this.update(userE);
                    return this.httpRes.userEmailValidate(userE.email);
                }
            case false:
            default:
                return this.httpRes.userNotFound(email);
        }
    }
    async register(ip: string, user: UserCreateDTO) {
        let userE: UserEntity;

        switch (await this.existByEmail(user.email)) {
            case true://return user exist yet
                return this.httpRes.userYetExist(user.email);
            case false://réactivation
                try {
                    userE = await this.read1ByEmail(user.email);
                    await this.recover(userE)
                    userE.profilComment = userE.profilComment + " /*NEW at " + Date() + "*/ " + JSON.stringify(userE);
                    userE.createdAt = new Date();
                    userE.emailIsValidate = false;
                    userE.lastConnexion = null;
                    userE.password = await this.securePassword(user.password)
                    userE.profilIsRestricted = false;
                    userE.role = UserRoleEnum.USER;
                    await this.update(userE);
                } catch (error) {
                    return this.httpRes.errorUnknow(error);
                }
                break;
            case null://création
            default:
                try {
                    user.password = await this.securePassword(user.password)
                    await this.create(user);
                    userE = await this.read1ByEmail(user.email);
                } catch (error) {
                    return this.httpRes.errorUnknow(error);
                }
        }

        //envoi mail : demande de validation email
        await this.mailS.sendWithNoReply(
            userE.email,
            this.mailS.mails.userToValidateEmail(userE.email, this.codeValidation(userE))
        )
        //return success
        return this.httpRes.userCreated(userE.email);
    }
    private async securePassword(password:string):Promise<string>{
        return await bcrypt.hash(password, 10);
    }
    private codeValidation(user: UserEntity): number {
        return user.createdAt.getTime() % 100000;
    }
}
