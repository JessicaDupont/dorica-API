export class ToolConvert{
    static emailToPath(email:string){
        let split = email.split('@');
        return split[0]+"%40"+split[1];
    }
}