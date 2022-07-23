import { Component, OnInit } from '@angular/core';
import{CartService}from'../../service/cart.service';
import { OrderModule } from 'src/app/models/order/order.module';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  order:OrderModule={
    fullName:'',
    totalPrice:0
  }

  constructor(private serviceC :CartService) { }

  ngOnInit(): void {
    this.order=this.serviceC.getOrder()
  }

}
