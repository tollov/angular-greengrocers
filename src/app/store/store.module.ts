import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreListComponent } from './list/list.component';
import { StoreItemComponent } from './item/item.component';
import { CartService } from '../cart.service';
import { StoreNavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StoreListComponent,
    StoreItemComponent,
    StoreNavbarComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    StoreListComponent, StoreNavbarComponent
  ]
})
export class StoreModule { }
