import { Component } from '@angular/core';
import { RouterLink ,RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faCartPlus = faCartPlus ;
  cartCount =0;
constructor(private productservise: ProductService) {}
  
  ngOnInit() {
  
    this.productservise.getcartitems().subscribe((data: any) => {
      this.cartCount = data.length;
    });
  }


 

}
