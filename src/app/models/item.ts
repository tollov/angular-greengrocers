export interface GroceryItem {
  id: string;
  name: string;
  type: string;
  price: number;
}

export const BlankGroceryItem : GroceryItem = {
  id: '',
  name: '',
  type: '',
  price: 0.0
}
