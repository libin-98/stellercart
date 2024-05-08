import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generalAdaptor } from 'src/app/Adaptors/generalAdaptor';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { GeneralService } from 'src/app/Services/general.service';
import { HttpErrorResponse } from '@angular/common/http';
import { generalHelper } from 'src/app/Helpers/generalhelper';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , FormsModule , ReactiveFormsModule , MatInputModule , MatButtonModule,MatIconModule, MatDialogModule , ForgotPasswordComponent , SignUpComponent],
  providers: [GeneralService] ,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  generalAdaptor : generalAdaptor = new generalAdaptor()
  generalHelper : generalHelper = new generalHelper()
  loginForm : FormGroup = this.generalAdaptor.loginForm()
  public loginErr :boolean = false;
  public passWordVisible : boolean = false
  constructor(private generalService : GeneralService , private  router : Router , private dialoge : MatDialog){}
  login(){
    if(this.loginForm.valid){
      this.generalService.login().subscribe({
        next : (res : any)=>{
          console.log(res.registerdUsers);
          if(this.generalHelper.checkLogin(res.registerdUsers,this.loginForm.value)){
            this.loginErr = false;
            this.router.navigate(['/user'])
          }else{
            this.loginErr = true;
            
          }
           
        },
        error: (err:HttpErrorResponse)=> {
          console.log(err);
          
        },
      })
    }
    else{
      this.loginForm.markAllAsTouched()
    }
  }
  showPasswod(){
    this.passWordVisible = !this.passWordVisible
  }
  openSignUp(){
    this.dialoge.open(SignUpComponent , {width : '35%' , minHeight : '300px'})
  }
  openForgot(){
    this.dialoge.open(ForgotPasswordComponent , {width : '40% ' , minHeight : ' 250px'})
  }

}
