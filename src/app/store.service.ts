import { Injectable, OnInit } from '@angular/core';
import { GroceryItem } from './models/item';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private readonly apiService : ApiService){}

  private itemsSource = new BehaviorSubject<GroceryItem[]>([]);
  items = this.itemsSource.asObservable();

  fetchAllItems() : void {
    this.apiService.getGroceryItems().then(items => {this.itemsSource.next(items)}).catch(error => {
      console.log('Error fetching grocery items: ', error)
    })
  }

  fetchByType(type:string) : void {
    this.apiService.getGroceryItems(type).then(items => {this.itemsSource.next(items)}).catch(error => {
      console.log('Error fetching grocery items: ', error)
    })
  }

  sortByName() : void {
    this.itemsSource.next(this.itemsSource.value.sort((a, b) => a.name.localeCompare(b.name)));
  }

  sortByPrice() : void {
    this.itemsSource.next(this.itemsSource.value.sort((a, b) => a.price - b.price));
  }

  sortById() : void {
    this.itemsSource.next(this.itemsSource.value.sort((a, b) => a.id.localeCompare(b.id)));
  }

}
