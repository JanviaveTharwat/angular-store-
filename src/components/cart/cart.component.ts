import { Component, OnInit } from '@angular/core';
//importing cart service and module
import { CartService } from '../../service/cart.service';
import { cart} from 'src/app/models/cart/cart.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
item: cart={
  products: [],
  totalPrice: 0,
};
//inject cart service
  constructor( private cartService:CartService ,
    private linking :Router) { }

  ngOnInit(): void {
    //allow get cart fubction to do its job
    this.item = this.cartService.getCart()
  }
  //changing quantities of each product  and updating the cart 
  changeQuantity(id:number,quantity:number):void{
    this.cartService.updateCart(id,quantity)
  }
  //removing product /s
  removeProduct (productID :number):void{
    this.cartService.removeProduct(productID)
  }
  //creating an order by products and form 
  createOrder(fullName :string):void{
    this.cartService.createOrder(fullName)
    this.linking.navigate(['/confirming'])
  }
}


