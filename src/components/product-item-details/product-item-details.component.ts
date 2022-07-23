import { Component, OnInit } from '@angular/core';
//import product service and product module also import active route to send data and recive data by routing
import { ProductModule } from 'src/app/models/product/product.module';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {
  //giving product module array name of productItem 
  productItem :ProductModule[]=[];
  product:ProductModule |null =null;
//injecting activeRouting and product service
  constructor(
    private linking :ActivatedRoute,
    private service :ProductService) { 
      this.linking.params.subscribe(params=>{
        //loadProduct is a function from product service that fech data from data.json file 
        this.service.loadProduct().subscribe(res =>{
          this.productItem= res
          //feltering products by id to get them to appear  on ui 
          this.product = this.filterProduct((params['id']))

      });
      
    });
  }

  ngOnInit(): void {
  }
  //fiktering product by its id from module and the data got from loadinproduct function and compare btween them 
  filterProduct(id:string):ProductModule{
    return this.productItem.filter(product=>product.id===parseInt(id))[0]
  }
}


