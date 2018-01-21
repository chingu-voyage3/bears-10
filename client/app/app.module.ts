import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './core/auth.guard';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { ItemsService } from './core/items.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { ItemListComponent } from './pages/inventory/item-list/item-list.component';
import { ItemFormComponent } from './pages/inventory/item-form/item-form.component';
import { DeleteDialogComponent } from './pages/inventory/item-list/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    InventoryComponent,
    ItemListComponent,
    ItemFormComponent,
    DeleteDialogComponent ],
  imports: [ BrowserModule, BrowserAnimationsModule, SharedModule, CoreModule, AppRoutingModule, FlashMessagesModule ],
  providers: [AuthGuard],
  bootstrap: [ AppComponent ],
  entryComponents: [DeleteDialogComponent]
})

export class AppModule {}
