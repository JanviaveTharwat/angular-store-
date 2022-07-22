import { Component, OnInit ,
  //sebding data to child component
  Input } from '@angular/core';
  //import product module and cart service
import { ProductModule } from 'src/app/module/product/product.module';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input() product: any;
//set a fixed quantiy number to biggin with
  setQuantity :number =1;
//injecting cart servise
  constructor(private serviceC :CartService) { }

  ngOnInit(): void {
  }
  //this is a function that connect cart and product list 
addToCart(product:ProductModule){
  this.serviceC.addToCart(product ,this.setQuantity)
  if(this.setQuantity <=5){
    //alerting the user that this product is added to his cart
  alert('${product.name} is added to your cart')
}
}  
}
