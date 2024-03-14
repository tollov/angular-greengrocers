import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GroceryItem } from './models/item';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient)

  async getGroceryItems(): Promise<GroceryItem[]> {
    const results = await firstValueFrom(this.http.get<GroceryItem[]>(`${environment.apiUrl}groceries`))
    return results;
  }
}
