import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass, NgFor } from '@angular/common';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [FontAwesomeModule, NgFor, NgClass, ProductCardComponent,RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
@Input() productItem :any;
faSolidStar = faSolidStar;
product: any;
details: any;
councart: number = 0;
cartlist: Array<any> = [];
constructor(private productservise: ProductService) {
  
}
quantities: { [key: number]: number } = {}; 
getFlooredRating(rating: number): number[] {
  return new Array(Math.round(rating));
}
ngOnInit() {
  this.productservise.getcartitems().subscribe((data: any[]) => {
    this.cartlist = data;
    this.cartlist.forEach(item => {
      if (!this.quantities[item.id]) {
        this.quantities[item.id] = item.quantity || 1; 
      }
    });
  });
   

}


addToCart(product: any) {
  const existingProductIndex = this.cartlist.findIndex(item => item.id === product.id);

  if (existingProductIndex > -1) {
    this.cartlist[existingProductIndex].quantity = (this.cartlist[existingProductIndex].quantity || 1) + 1;
  } else {
    product.quantity = 1;
    this.cartlist.push(product);
  }

  this.quantities[product.id] = this.cartlist.find(item => item.id === product.id)?.quantity || 1;
  
  this.productservise.setcartitems(this.cartlist);
  
}
}