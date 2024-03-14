import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { GroceryItem } from 'src/app/models/item';

@Component({
  selector: 'app-store-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class StoreListComponent {
  items : GroceryItem[] = [];
  constructor(private readonly apiService : ApiService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() : void {
    this.apiService.getGroceryItems().then(items => {this.items = items}).catch(error => {
      console.log('Error fetching grocery items: ', error)
    })
  }
}
