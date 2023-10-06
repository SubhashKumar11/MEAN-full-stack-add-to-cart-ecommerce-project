import { Injectable, OnInit } from '@angular/core';
import { product } from '../shared/product';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService   {
   private cartItems :  any[] = [];
   private url = "http://localhost:3002/register" ;
   cartItemCount:number = 0;

  constructor(private http:HttpClient) { }
  private Products: product[]=[
    {id:1,name:"Tata Refine",price:10,description:"nice",imageUrl:'/assets/ref.jpg'},
    {id:2,name:"Tata Refine",price:10,description:"nice",imageUrl:'/assets/ref2.jpg'},
    {id:3,name:"Tata Refine",price:10,description:"nice",imageUrl:'/assets/ref.jpg'},
    {id:4,name:"Tata Refine",price:10,description:"nice",imageUrl:'/assets/ref2.jpg'},
    {id:5,name:"Tata Refine",price:10,description:"nice",imageUrl:'/assets/ref.jpg'},
    {id:6,name:"Tata Refine",price:10,description:"nice",imageUrl:'/assets/ref.jpg'},
    {id:7,name:"Tata Refine",price:10,description:"nice",imageUrl:'/assets/ref.jpg'},
    {id:8,name:"Tata Refine",price:10,description:"nice",imageUrl:'/assets/ref.jpg'}
  ]
  //to return the product list
  getProducts(): product[]{
    return this.Products;
  }
  addToCartService(product:any){
  this.cartItems.push(product)
  this.cartItemCount++;
  console.log(this.cartItemCount)
  }
 postProductToDatabase(Product:any): Observable<product>{
 return this.http.post<product>(this.url,Product)
 }

}
