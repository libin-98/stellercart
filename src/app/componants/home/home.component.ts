import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule} from '@angular/router';
import { GeneralService } from 'src/app/Services/general.service';
import { Subject, takeUntil } from 'rxjs';
import { GeneralStateService } from 'src/app/Services/general-state.service';
import { ProductBasicData, SearchResponse, homePageProductData, homePageProductRes } from 'src/app/Models/Models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , HeaderComponent , FooterComponent , RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy , OnInit{
  destroy$ : Subject<void> = new Subject
  searchProductName : string = ''
  productList :ProductBasicData[] = []
  homepageProductList : homePageProductData [] =[]
  @ViewChildren('productListContainer') productListContainer: QueryList<ElementRef> = new QueryList<ElementRef>;
  @ViewChild('moreDetails' ,{ static: true }) moreDetails : ElementRef | undefined
  showMoreDetails : boolean = false
  expandTopHeight : string = ''
  productExpandedDetails : any
  constructor(private generalService : GeneralService , private generalState : GeneralStateService){
    
    this.generalService.productSearch$.pipe(takeUntil(this.destroy$)).subscribe((res)=>{
      this.searchProductName = this.generalState.searchProduct
      this.SelectedproductDetails()
    })
  }
  ngOnInit(): void {
   this.getHomePageProducts()
  }
  getHomePageProducts(){
    this.generalService.getHomePageProductData().pipe(takeUntil(this.destroy$)).subscribe({
      next : (res : homePageProductRes) =>{
        this.homepageProductList = res.data
      } ,
      error : (err : HttpErrorResponse)=>{
        
      }
    })
  }
  SelectedproductDetails(){
    this.generalService.getProduct(this.searchProductName).pipe(takeUntil(this.destroy$)).subscribe({
      next :(res :SearchResponse)=>{
        this.productList = res.data
      } ,
      error :(err : HttpErrorResponse)=>{}
    })
  }

  expandDiv(selectedItemData : any , index : number){
    this.productExpandedDetails = {
      description : selectedItemData.product_description ,
      atributes : Object.values(selectedItemData.product_attributes) ,
      images : selectedItemData.product_photos ,
      
    }
    
    let selectedDiv = this.productListContainer.toArray()[index].nativeElement
    if(selectedDiv){
      if(selectedDiv.style.marginBottom != '430px'){
        this.productListContainer.forEach(div => {
          div.nativeElement.style.marginBottom = '30px';
          div.nativeElement.style.border = 'none';
        })
        selectedDiv.style.marginBottom = '430px'
        selectedDiv.style.border = '2px solid #ffd700'
        selectedDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.showMoreDetails = true
        let moreDetailsContainer = this.moreDetails?.nativeElement
        let expandOffsetTop : number = -2000 + selectedDiv.offsetTop
        this.expandTopHeight = expandOffsetTop.toString() + 'px'  
      }
      else{
        selectedDiv.style.marginBottom = '30px'
        selectedDiv.style.border = 'none'
        this.showMoreDetails = false
      }

      
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
