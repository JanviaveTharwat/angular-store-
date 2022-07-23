import { Component, OnInit } from '@angular/core';
//import sevice and module of product 
import {ProductModule} from'../../models/product/product.module';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
//naming  product module array with a more meaningfull for its job in this part of the app
 productItem :ProductModule[]=[];
//injecting product service dependency and re name it in perpose of essay usage
constructor(private Service : ProductService ) { }


ngOnInit(): void {
  //loading all products data  for product page 
  this.Service.loadProduct().subscribe((res: ProductModule[])=>{
    this.productItem= res;
  })
}
}
  
