import { Data } from "@angular/router";

export interface IUser {
    usermail : string,
    password : string,
    confirmpassword : string,
    title : string,
    firstname : string,
    lastname : string,
    birthdate : Data,
    documenttype : string,
    documentnumber : string,
    issuingcountry? : string,
    documentexpirydate?: Data
}
