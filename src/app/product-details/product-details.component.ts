import { Component, Input } from '@angular/core';
import productData from '../../../products.json';
import { Type } from '../type';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass, NgFor } from '@angular/common';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { ProductCardComponent } from "../product-card/product-card.component";
import { DiscountPipe } from '../discount.pipe';
import { Router ,  RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ProductCardComponent,NgFor,FontAwesomeModule,DiscountPipe,RouterLink ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  products: Array<Type> = [];
  product:any = [];
  @Input() id?: string;
  faSolidStar=faSolidStar;

  ngOnInit() {
    this.products = productData;
    this.product = this.products.find(product => product.id === Number(this.id));
    if (this.product) {
      console.log(this.product);
    } else {
      console.error('Product not found');
    }
    
  }
  getFlooredRating(rating: number): number[] {
    return new Array(Math.round(rating));
  }
}
