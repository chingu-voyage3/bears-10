import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderSubmitComponent } from './pages/order/order-submit/order-submit.component';
import { OrderPrintComponent } from './pages/order/order-print/order-print.component';
import { OrderEditComponent } from './pages/order/order-edit/order-edit.component';

@NgModule({
  declarations: [ AppComponent, HomeComponent, SignupComponent, InventoryComponent, OrderComponent, OrderSubmitComponent, OrderPrintComponent, OrderEditComponent ],
  imports: [ BrowserModule, BrowserAnimationsModule, SharedModule, CoreModule, AppRoutingModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
