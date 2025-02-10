import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGaurd } from './core/auth-gaurd.service';
import { ProductComponent } from './product/product.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrderComponent } from './order/order.component';
import { BookingformComponent } from './bookingform/bookingform.component';

export const routes: Routes = [
    {path:'login',component: LoginComponent},
    {path:'product',component: ProductComponent,canActivate:[AuthGaurd]},
    {path:'inventory',component: InventoryComponent,canActivate:[AuthGaurd]},
    {path:'order',component: OrderComponent,canActivate:[AuthGaurd]},
    {path:'bookingForm',component:BookingformComponent},
    {path:'',redirectTo:'/login',pathMatch:'full'},

];
