
export class productInCart {
  id: number;
  name: string;
  price: number;
  url: string ;
  totalPrice:number;
  quantity:number;


  constructor(){
    this.id=0;
    this.name='';
    this.price=0;
    this.url='';
    this.totalPrice=0;
    this.quantity=0;
  }
 
}
export class cart {
  products:productInCart[];
  totalPrice:number;
  constructor(){
    this.products=[];
    this.totalPrice=0;
  }
 }
