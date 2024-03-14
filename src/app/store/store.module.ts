import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreListComponent } from './list/list.component';
import { StoreItemComponent } from './item/item.component';
import { CartService } from '../cart.service';



@NgModule({
  declarations: [
    StoreListComponent,
    StoreItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StoreListComponent
  ]
})
export class StoreModule { }
