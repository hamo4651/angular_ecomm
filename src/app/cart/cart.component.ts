import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems : Array<any> = [];
  total : number = 0
  quantities: { [key: number]: number } = {}; 
      constructor(private productservise: ProductService ) {}

  ngOnInit(){
   
this.productservise.getcartitems().subscribe((data: any) => {
 
  this.cartItems = data;
  this.cartItems.forEach(item => {
    this.quantities[item.id] = item.quantity || 1;  
  });
  this.updateTotal();
});


  }

  decreaseQuantity(itemId: number) {
    if (this.quantities[itemId] > 1) {
      this.quantities[itemId]--;
      this.productservise.setQuantity(itemId, this.quantities[itemId]);
      this.updateTotal();
    }
  }

  increaseQuantity(itemId: number) {
    this.quantities[itemId]++;
    this.productservise.setQuantity(itemId, this.quantities[itemId]);
    this.updateTotal();
  }

  removeItem(itemId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    delete this.quantities[itemId];
    this.updateTotal();
  }

  updateTotal() {
    this.total = this.cartItems.reduce((sum, item) => {
      return sum + (item.price * (this.quantities[item.id] || 1));
    }, 0);
  }
}

