import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { GroceryItem } from 'src/app/models/item';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class StoreListComponent {
  constructor(private readonly storeService : StoreService) {}
  items : GroceryItem[] = [];
  private subscription: Subscription = new Subscription();


  ngOnInit() {
    this.subscription = this.storeService.items.subscribe(
      (items:GroceryItem[]) => {
        this.items = items;
      }
    );
    this.storeService.fetchAllItems();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
