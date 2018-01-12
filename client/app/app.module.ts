import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './core/auth.guard';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { ItemsService } from './core/items.service';
import { ViewItemComponent } from './pages/inventory/view-item/view-item.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderSubmitComponent } from './pages/order/order-submit/order-submit.component';
import { OrderPrintComponent } from './pages/order/order-print/order-print.component';
import { OrderEditComponent } from './pages/order/order-edit/order-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    InventoryComponent,
    OrderComponent,
    OrderSubmitComponent,
    OrderPrintComponent,
    OrderEditComponent,
    ViewItemComponent ],
  imports: [ BrowserModule, BrowserAnimationsModule, SharedModule, CoreModule, AppRoutingModule, FlashMessagesModule ],
  providers: [AuthGuard],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
