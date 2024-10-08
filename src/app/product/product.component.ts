import { Component } from '@angular/core';
import productData from '../../../products.json';
import { Type } from '../type';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass, NgFor } from '@angular/common';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FontAwesomeModule, NgFor, NgClass, ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  products: Array<Type> = [];
 
  constructor(private productservise: ProductService) {}
  
  ngOnInit() {
    this.productservise.getProducts().subscribe((data: any) => {
      this.products = data.products
    })
    // this.products = productData;
     
  }

}
