import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass, NgFor } from '@angular/common';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterLink } from '@angular/router';

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
getFlooredRating(rating: number): number[] {
  return new Array(Math.round(rating));
}


}
