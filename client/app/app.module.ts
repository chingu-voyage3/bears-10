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
import { FlashMessagesModule } from 'ngx-flash-messages';

@NgModule({
  declarations: [ AppComponent, HomeComponent, SignupComponent, InventoryComponent ],
  imports: [ BrowserModule, BrowserAnimationsModule, SharedModule, CoreModule, AppRoutingModule, FlashMessagesModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
