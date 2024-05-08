import { Injectable } from '@angular/core';
import {HttpClientModule , HttpClient, HttpHeaders} from "@angular/common/http";
import { Subject, map } from 'rxjs';
import { SearchResponse, homePageProductRes, product, productList } from '../Models/Models';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  baseUrl : string = environment.apiURL ;
  Rapidapikey : string = environment.RapidapiKey ;
  RapidapiHost : string = environment.RapidapiHost 
  productSearch$ : Subject<void> = new Subject

  constructor(private http: HttpClient) { }

  login(){
    return this.http.get('assets/jsonFiles/logindata.json')
  }

  getProductList(){
    return this.http.get('assets/jsonFiles/item-list.json').pipe(map((res : any)=>{return res as productList}))
  }

  getProduct(productname : string){
    let headers  = {
      'X-Rapidapi-Key' : this.Rapidapikey ,
      'X-Rapidapi-Host' : this.RapidapiHost
    }
    // return this.http.get(this.baseUrl+`search?q=${productname}&country=in&language=en HTTP/1.1` , {headers : headers} ).pipe(map((res : any)=>{
    //   return res as SearchResponse
    // }))
    return this.http.get('assets/jsonFiles/sampleProductDetails.json').pipe(map((res)=>{
      return res as SearchResponse
    }))
  }

  getHomePageProductData(){
    return this.http.get('assets/jsonFiles/homepageProducts.json').pipe(map((res :any)=>{
      return res as homePageProductRes
    }))
  }

  searchTrigger(){
    this.productSearch$.next()
  }
}
