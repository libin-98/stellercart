import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralStateService {

  constructor() { }

  searchProductName : string = ''
  set searchProduct(val : string){
    this.searchProductName = val
  }
  get searchProduct(){
    return this.searchProductName
  }
}
