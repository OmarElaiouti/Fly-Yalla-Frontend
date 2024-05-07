import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { IUser } from '../../Models/iuser';
import { RecaptchaModule } from 'ng-recaptcha';
import { NgClass } from '@angular/common';
import { MatDialog} from '@angular/material/dialog';
import { WarningComponentComponent } from '../warning-component/warning-component.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,RecaptchaModule,NgClass],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private matdialog:MatDialog){}
 toggleselect:boolean = false;
 toggledocument:boolean = false;
 togglecountry:boolean = false;
 togglecode:boolean = false;
 showEyeIcon: boolean = false;
 showEyeIcon2:boolean = false;
 showEyeconfirmIcon:boolean = false;
 showEyeconfirmIcon2:boolean = false;
 showWarning:boolean = false ;
  selectedDay: string = '';
  selectedMonth: string = '';
  selectedYear: string = '';
  selectedexpireDay: string = '';
  selectedexpireMonth: string = '';
  selectedexpireYear: string = '';
  isolderenough: boolean = true;
  notexpired: boolean = true;
  countrycode: string = '';
  mobilenum: string = '';
 user : IUser = {usermail: '' , password:'', confirmpassword:'' , title:'' , firstname:'' , lastname:'' , birthdate : new Date(`${this.selectedDay}/${this.selectedMonth}/${this.selectedYear}`),
                  documenttype: '', documentnumber : '' , issuingcountry : '' ,documentexpirydate : new Date(`${this.selectedexpireDay}/${this.selectedexpireMonth}/${this.selectedexpireYear}`),
                  phonenumber:`${this.countrycode}${this.mobilenum}`, contactemail:''}
 opened(){
  this.toggleselect =true;
 }
 opendocument(){
  this.toggledocument = true;
 }
 opencountry(){
  this.togglecountry = true;
 }
 opencode(){
  this.togglecode = true;
 }
 handleResolved(){
  
 }
 toggleEyeIcon(){
  this.showEyeIcon = this.user.password !== '';

 }
 toggleEyeConfirmIcon(){
  this.showEyeconfirmIcon = this.user.confirmpassword !== '';
 }
 togglePasswordVisibility(event:any,password:NgModel): void {
  event.stopPropagation();
  this.showEyeIcon2 = true ;
  const passwordInput = document.getElementById('exampleInputPassword1') as HTMLInputElement;
  passwordInput.type = 'text';
}
togglePasswordVisibility2(password:NgModel): void {
  this.showEyeIcon2 = false;
  const passwordInput = document.getElementById('exampleInputPassword1') as HTMLInputElement;
  passwordInput.type = 'password';
}
togglePasswordConfirmVisibility(confirmpassword:NgModel){
  this.showEyeconfirmIcon2 = true ;
  const passwordconfirmInput = document.getElementById('exampleInputPassword2') as HTMLInputElement;
  passwordconfirmInput.type = 'text';
}
togglePasswordConfirmVisibility2(confirmpassword:NgModel){
  this.showEyeconfirmIcon2 = false ;
  const passwordconfirmInput = document.getElementById('exampleInputPassword2') as HTMLInputElement;
  passwordconfirmInput.type = 'password';
}
 onSubmit(event : any , signupform:NgForm){
  const currentDate = new Date();
  const expireDate = new Date(parseInt(this.selectedexpireYear), parseInt(this.selectedexpireMonth) - 1, parseInt(this.selectedexpireDay));
  if(signupform.invalid){
    //this.matdialog.open(WarningComponentComponent);
    event.stopPropagation();
    signupform.control.markAllAsTouched();
  }
  else if((new Date().getFullYear() - parseInt(this.selectedYear)) < 18){
    this.isolderenough = false;
    event.stopPropagation();
  }
  else if(signupform.value.documenttype == 'Passport' && expireDate.toISOString() < currentDate.toISOString()){
    this.notexpired =false;
    event.stopPropagation();
  }
  else{
    this.isolderenough =true;
    this.notexpired =true;
    console.log(signupform.value);
  }
 }
}
