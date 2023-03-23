export interface IHttpResponses{
    userEmailValidate(email: string);
    userNotFound(email: string);
    userCreated(email:string);
    errorUnknow(error: any);
    userYetExist(email:string);
}