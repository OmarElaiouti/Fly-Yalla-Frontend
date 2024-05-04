import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUser } from '../../Models/iuser';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
 toggleselect:boolean = false;
 toggledocument:boolean = false;
 togglecountry:boolean = false;
  selectedDay: string = '';
  selectedMonth: string = '';
  selectedYear: string = '';
  selectedexpireDay: string = '';
  selectedexpireMonth: string = '';
  selectedexpireYear: string = '';
  isolderenough: boolean = true;
  notexpired: boolean = true;
 user : IUser = {usermail: '' , password:'', confirmpassword:'' , title:'' , firstname:'' , lastname:'' , birthdate : new Date(`${this.selectedDay}/${this.selectedMonth}/${this.selectedYear}`),
                  documenttype: '', documentnumber : '' , issuingcountry : '' ,documentexpirydate : new Date(`${this.selectedexpireDay}/${this.selectedexpireMonth}/${this.selectedexpireYear}`)}
 opened(){
  this.toggleselect =true;
 }
 opendocument(){
  this.toggledocument = true;
 }
 opencountry(){
  this.togglecountry = true;
 }
 onSubmit(event : any , signupform:any){
  const currentDate = new Date();
  const expireDate = new Date(parseInt(this.selectedexpireYear), parseInt(this.selectedexpireMonth) - 1, parseInt(this.selectedexpireDay));
  if((new Date().getFullYear() - parseInt(this.selectedYear)) < 18){
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
