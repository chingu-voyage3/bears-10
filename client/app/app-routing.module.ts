import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InventoryComponent } from './pages/inventory/inventory.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign_up', component: SignupComponent },
  { path: 'inventory', component: InventoryComponent },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
