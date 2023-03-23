import { HttpException } from "@nestjs/common";
import { HttpCodes } from "./httpCodes";
import { HttpDescriptionsFR } from "./httpDescriptions.fr";
import { IHttpResponses } from "./httpResponses.interface";

export class HttpResponses implements IHttpResponses {
    constructor() {
        this.httpDescription = new HttpDescriptionsFR();
    }
    userEmailValidate(email: string) {
        throw new HttpException(
            this.httpDescription.userEmailValidate(email),
            this.httpCode.userEmailValidate(email))
    }
    userNotFound(email: string) {
        throw new HttpException(
            this.httpDescription.userNotFound(email),
            this.httpCode.userNotFound(email))
    }
    userCreated(email:string){
        return {
            statusCode: this.httpCode.userCreated(email),
            message: this.httpDescription.userCreated(email)
        };
    }
    errorUnknow(error: any) {
        throw new HttpException(
            this.httpDescription.errorUnknow(error),
            this.httpCode.errorUnknow(error))
    }
    userYetExist(email: string) {
        throw new HttpException(
            this.httpDescription.userYetExist(email),
            this.httpCode.userYetExist(email))
    }
    
    httpCode: IHttpResponses = new HttpCodes();
    httpDescription: IHttpResponses;
}