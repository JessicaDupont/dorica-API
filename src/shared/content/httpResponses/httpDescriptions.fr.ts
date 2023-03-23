import { IHttpResponses } from "./httpResponses.interface";

export class HttpDescriptionsFR implements IHttpResponses{
    userEmailValidate(email: string) {
        return "L'adresse email "+email+" a bien été validée."
    }
    userNotFound(email: string) {
        return "L'utilisateur "+email+" n'as pas été trouvé."
    }
    userCreated(email:string){
        return "L'utilisateur "+email+" a bien été créé."
    }
    errorUnknow(error: any) {
        return "Une erreur est survenue : "+error
    }
    userYetExist(email: string) {
        return "L'utilisateur "+email+" existe déjà."
    }
}