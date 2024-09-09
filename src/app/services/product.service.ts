import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  private cartitems = new BehaviorSubject<Array<any>>([]);
  private quantitiesSubject = new BehaviorSubject<{ [key: number]: number }>({});
  getQuentitys() {
    return this.quantitiesSubject.asObservable();
  }
  setQuantity(itemId: number, quantity: number): void {
    const currentQuantities = this.quantitiesSubject.getValue();
    
    currentQuantities[itemId] = quantity;
    
    this.quantitiesSubject.next(currentQuantities);
  }
 getcartitems(){
   return this.cartitems.asObservable();
 }

  setcartitems(items: Array<any>) {
    this.cartitems.next(items);
  }
 
  getProducts() {
    return this.http.get('https://dummyjson.com/products');
  }
 

  getProduct(id: number) {
    return this.http.get('https://dummyjson.com/products/' + id);
  }
}