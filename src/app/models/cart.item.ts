import { GroceryItem } from "./item";

export interface CartItem {
    item: GroceryItem,
    quantity: number
}