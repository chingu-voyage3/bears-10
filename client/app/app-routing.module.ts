import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { OrderComponent } from './pages/order/order.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CategoryService } from './core/category.service';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign_up', component: SignupComponent },
  { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard] },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'order',
    loadChildren: './pages/order/order.module#OrderModule'
  },
  {
    path: 'admin',
    loadChildren: './pages/admin/admin.module#AdminModule',
    canActivate: [AdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard, AdminGuard, CategoryService],
  exports: [RouterModule]
})

export class AppRoutingModule { }
