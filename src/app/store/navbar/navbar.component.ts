import { Component } from '@angular/core';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-store-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class StoreNavbarComponent {
  filterByOptions : string[] = ['fruit', 'vegetable'];
  orderByOptions : string[] = ['price', 'name'];

  constructor(private readonly storeService : StoreService){}

  onOrderByChange(event: any) {
    const value = event.target.value;
    switch (value) {
      case 'price':
        this.storeService.sortByPrice();
        break;
      case 'name':
        this.storeService.sortByName();
        break;
      default:
        this.storeService.sortById();
        break;
    }
  }

  onFilterByChange(event: any) {
    this.storeService.fetchByType(event.target.value);
  }
}
