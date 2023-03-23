import { IHttpResponses } from "./httpResponses.interface";

export class HttpCodes implements IHttpResponses{
    userEmailValidate(email: string) {
        return 200;
    }
    userNotFound(email: string) {
        return 404;
    }
    userCreated(email:string){
        return 201;
    }
    errorUnknow(error: any) {
        return 500;
    }
    userYetExist(email: string) {
        return 409;
    }
}