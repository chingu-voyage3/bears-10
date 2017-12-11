import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sign_up', component: SignupComponent},
  {path: 'sign_in', component: SigninComponent},
  {path: 'items', component: ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
