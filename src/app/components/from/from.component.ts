import { Component, OnInit,
  //sending data to parent
  Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {
  //making parent and child conunicate by eventEmitter function
@Output() submitOrder:EventEmitter<string>=new EventEmitter();
//injecting router
  constructor() {} 
    fullName : string ='';
    email : string ='';
    number :number =0 ;
    creditcard: string ='' ;
    adress: string='';
  

  ngOnInit(): void {
  }

submit( ):void{
  this.submitOrder.emit(this.fullName);
}
}
