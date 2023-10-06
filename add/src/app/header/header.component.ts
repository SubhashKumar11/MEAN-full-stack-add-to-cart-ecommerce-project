import { Component , OnInit} from '@angular/core';
import { product } from '../shared/product';
import { CartServiceService } from '../services/cart-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
   products:product[] = [];
   cartItemCount: number = 0;
   constructor(private cartService: CartServiceService,
    private router :Router){}
   ngOnInit(): void {
       //to show all product
       this.products = this.cartService.getProducts();
   }
   addToCart(product:any){
    this.cartService.addToCartService(product);
    console.log("Added products are:",product)
    this.cartItemCount++;
    //below line send added product to database
    this.cartService.postProductToDatabase(product).subscribe({
      next:(res)=>{
          console.log("Product added to db",res); 
      },
      error : (error:any)=>{
          console.log("Error:",error)
      }
    });//end of db code
    alert("Item added to cart successfully!");
    console.log(this.cartItemCount);
   }
   
}
