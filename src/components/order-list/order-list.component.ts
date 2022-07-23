import { Component, OnInit ,
  //sebding data to child component
  Input } from '@angular/core';
  //import product module and cart service
import { ProductModule } from 'src/app/models/product/product.module';
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
  {
    //alerting the user that this product is added to his cart
  alert(`${this.setQuantity} of ${product.name} product/s is added to your cart`)
}
}  
}
