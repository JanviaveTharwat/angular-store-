import { Injectable } from '@angular/core';
import {Observable } from'rxjs';
import {ProductModule } from '../models/product/product.module';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
 
  constructor(private http : HttpClient) { }
  loadProduct():Observable<ProductModule[]>{
    return this.http.get<ProductModule[]>
    ('/assets/data.json')
  }
    
    }
      
       
      
    
    
      
    
  
  
