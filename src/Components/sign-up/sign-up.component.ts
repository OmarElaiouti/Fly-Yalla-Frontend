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
 user : IUser = {usermail: '' , password:'', confirmpassword:''}
}