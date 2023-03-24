import { ENV } from "src/shared/env";
import { ToolConvert } from "src/shared/tools/convert";
import { IMail } from "./mail.interface";
import { IMails } from "./mails.interface";

export class MailsFR implements IMails{
    userToValidateEmail(email:string, code:number): IMail {
        return {
            subject: "DoricAPI : validation de votre adresse email.",
            text: "Bienvenue sur DoricAPI, "
            +"\nl'API qui fourni les informations du système de RPG sur table de Dorica."
            +"\n"
            +"\nAfin de pouvoir bénéficier des informations de l'API, "
            +"veuillez confirmer votre adresse email en cliquant sur le lien ci-dessous "
            +"(ou en le copiant dans votre navigateur): "
            +"\n"+ENV.SERVER.domain+"/users/"+ToolConvert.emailToPath(email)+"/"+code
            +"\nBon jeu!"
            +"\nMiss Ica",
            html: "<h1>Bienvenue sur DoricAPI,</h1> "
            +"<p>l'API qui fourni les informations du système de RPG sur table de Dorica.</p>"
            +"<p>Afin de pouvoir bénéficier des informations de l'API, "
            +"veuillez confirmer votre adresse email en cliquant sur le lien ci-dessous "
            +"(ou en le copiant dans votre navigateur): "
            +"<br/><a href=\""+ENV.SERVER.domain+"/users/"+ToolConvert.emailToPath(email)+"/"+code+"\">"
                +""+ENV.SERVER.domain+"/users/"+ToolConvert.emailToPath(email)+"/"+code
            +"</a>"
            +"</p>"
            +"<p>Bon jeu!</p>"
            +"<p style=\"margin-left: 50%;\">Miss Ica</p>",
        }
    }
}