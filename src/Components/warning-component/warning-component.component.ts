import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-warning-component',
  standalone: true,
  imports: [],
  templateUrl: './warning-component.component.html',
  styleUrl: './warning-component.component.css'
})
export class WarningComponentComponent {
  constructor(public dialogRef: MatDialogRef<WarningComponentComponent>){}
  closeDialog(){
    this.dialogRef.close();
  }
}
