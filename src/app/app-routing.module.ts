import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ ProductListComponent} from'./components/product-list/product-list.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import{CartComponent} from './components/cart/cart.component';
import{OrderListComponent} from './components/order-list/order-list.component';
import{ConfirmationComponent} from './components/confirmation/confirmation.component';

const routes: Routes = [
  
  {path:"product-detail/:id",component:ProductItemDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'confirming',component:ConfirmationComponent},
  {path:'order',component:OrderListComponent},
  {path:'',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
