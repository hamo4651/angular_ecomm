import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {

  transform(price: number, discountPercentage?: number): string {
    if (discountPercentage && discountPercentage > 0) {
      const discount = (price * discountPercentage) / 100;
      const discountedPrice = price - discount;
      return ` 
            
      Discounted Price: $${discountedPrice.toFixed(2)}`;
    }
    return `Price: $${price}`;
  }

}
