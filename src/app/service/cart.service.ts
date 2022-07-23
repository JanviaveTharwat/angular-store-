import { Injectable } from '@angular/core';
import { OrderModule } from '../models/order/order.module';
import{ cart} from '../models/cart/cart.module';
import { ProductModule } from '../models/product/product.module';





@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items:cart={
    products:[],
    totalPrice :0
  };
  order:OrderModule={
    fullName :'',
    totalPrice :0
  };
  

  constructor() { }
getCart(){
  return this.items
}
addToCart(product: ProductModule,quantity:number){

  
  const x = this.items.products.findIndex((p)=>p.id=== product.id)
  const totalPayment =product.price*quantity
  if (x >=0){
    this.items.products[x].totalPrice +=totalPayment
    this.items.products[x].quantity += quantity
  }else{
    let productInCart={
      id:product.id,
      name :product.name,
      url : product.url,
      price: product.price,
      totalPrice:totalPayment,
      quantity

    }
  
  this.items.products.push(productInCart)
}
this.updateCartTotal()
}
removeProduct(productID:number){
  const x = this.items.products.findIndex(product => product.id === productID)
  this.items.products.splice(x,1);
  this.updateCartTotal()
}
updateCart(productID:number , quantity:number){
  let productX = this.items.products.findIndex(p => p.id===productID)
  if (productX >= 0){
    this.items.products[productX].totalPrice=this.items.products[productX].price*quantity
    this.items.products[productX].quantity=quantity
  }
  this.updateCartTotal()
}
updateCartTotal():void{
  this.items.totalPrice=0
  this.items.products.forEach(product => this.items.totalPrice+= product.totalPrice)
}
createOrder(fullName:string){
  this.order={
    fullName,
    totalPrice: this.items.totalPrice
  }
}

getOrder():OrderModule{
  return this.order
}
}
