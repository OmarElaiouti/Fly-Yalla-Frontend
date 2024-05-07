import { Data } from "@angular/router";

export interface IUser {
    usermail : string,
    password : string,
    confirmpassword : string,
    title : string,
    firstname : string,
    lastname : string,
    birthdate : Date,
    documenttype : string,
    documentnumber : string,
    issuingcountry? : string,
    documentexpirydate?: Date,
    phonenumber: string,
    contactemail: string,
}
