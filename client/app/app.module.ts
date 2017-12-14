import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InventoryComponent } from './pages/inventory/inventory.component';

import { UserService } from './user.service';

@NgModule({
  declarations: [ AppComponent, HomeComponent, SignupComponent, InventoryComponent ],
  imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, SharedModule, CoreModule ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
