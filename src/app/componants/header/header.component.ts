import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { product, productList } from 'src/app/Models/Models';
import { GeneralService } from 'src/app/Services/general.service';
import { Subject, takeUntil } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RouterModule} from '@angular/router';
import { HeaderNavbarComponent } from '../header-navbar/header-navbar.component';
import { MatOptionSelectionChange } from '@angular/material/core';
import { GeneralStateService } from 'src/app/Services/general-state.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule , MatInputModule , MatIconModule , FormsModule , ReactiveFormsModule , MatAutocompleteModule ,RouterModule , HeaderNavbarComponent , MatDialogModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit  {
  productList : product[] = [] ;
  filterdProductList : product[] = [] ;
  $destroy : Subject<void> = new Subject ;
  productName : FormControl = new FormControl ;
  menuOPenToggle : boolean = false ;
  loggedUserDetails : any ; 
  loginStatus : boolean = false;

  constructor(private generalService : GeneralService , private generalState : GeneralStateService , private matDialoge : MatDialog){}
  ngOnInit(): void {
    this.getProductList()
    this.checkLoginStatus()
  }

  getProductList(){
    this.generalService.getProductList().pipe(takeUntil(this.$destroy)).subscribe({
      next : (res : productList)=>{
        this.productList = res.products
        this.filterdProductList = res.products
      }
    })
  }
  filterProductList(){
    this.filterdProductList = this.productList.filter((product : product)=> product.name.toLowerCase().includes(this.productName.value.toLowerCase()))
  }

  menuToggle(){
    this.menuOPenToggle = !this.menuOPenToggle
  }

  selectedProduct(event : MatOptionSelectionChange){
    if(event.isUserInput){
      this.generalState.searchProduct = event.source.value;
      this.generalService.searchTrigger()
      
    }
  }
  login(){
    if(!this.loginStatus){
      this.matDialoge.open(LoginComponent , { width : '40%'}).afterClosed().subscribe((res: boolean)=>{
        if(res){
          this.checkLoginStatus()
        }
      })
    }
    else{
      localStorage.removeItem('loggedUser')
      this.checkLoginStatus()
    }
    
  }
  checkLoginStatus(){
    if(localStorage ){
      let loggedUser : any  = localStorage.getItem('loggedUser')
      this.loggedUserDetails = JSON.parse(loggedUser)
      if(this.loggedUserDetails)
        this.loginStatus = true
      else  
        this.loginStatus = false
      
    }
  }

}
