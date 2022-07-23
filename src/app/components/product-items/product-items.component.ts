import { Component, OnInit,
  //using input to comunicate btween a child and its parent 
  Input } from '@angular/core';


@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
@Input() productItem: any;
  constructor( ) { }

  ngOnInit(): void {
  }

 }




