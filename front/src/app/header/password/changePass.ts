import { LongDateFormatKey } from "moment";

export class ChangePass {
    id:number;
    oldPassword: string;
    newPassword:string;

    constructor(oldPassword,newPassword){
        this.id=null;
        this.oldPassword=oldPassword;
        this.newPassword=newPassword;
    }
}