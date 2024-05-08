import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule , MatDialogModule , MatIconModule , MatInputModule , FormsModule , ReactiveFormsModule , MatButtonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements AfterViewInit {
  constructor(){
  }
  ngAfterViewInit(): void {
    // let div = document.createElement('div');
    // div.className = 'bottom'
    // if(div){
    //   let heading = document.createElement('h1');
    //   heading.textContent = 'Heading';
    //   div.appendChild(heading);
    //   document.body.appendChild(div)
    // }else{
    //   console.log("no elemnt named top found")
    // }
  }

}
