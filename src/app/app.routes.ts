import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [


    {
        path: '',
        component: ProductComponent,
        title: 'product List',
      },
      {
        path: 'product-details/:id',
        component: ProductDetailsComponent,
        title: 'product details',
      },
      {
         path:'login',
         component:LoginComponent,
         title: 'login',
      },
      {
        path:'register',
        component:RegisterComponent,
        title: 'register',
     },
     {
      path:'cart',
      component:CartComponent,
      title: 'cart',
   },
{

  path: '**',
  component:NotFoundComponent,
  title: 'not found',
}

];
