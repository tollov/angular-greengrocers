import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './item/item.component';
import { CartListComponent } from './list/list.component';



@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
