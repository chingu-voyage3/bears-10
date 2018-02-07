import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../../shared/shared.module';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { OrderSubmitComponent } from './order-submit/order-submit.component';
import { OrderNewComponent } from './order-new/order-new.component';
import { OrderOpenComponent } from './order-open/order-open.component';
import { OrderOpenEditComponent } from './order-open/order-open-edit/order-open-edit.component';
import { OrderClosedComponent } from './order-closed/order-closed.component';
import { OrderDetailsComponent } from './order-new/order-details/order-details.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, OrderRoutingModule, SharedModule ],
  declarations: [
    OrderComponent,
    OrderSubmitComponent,
    OrderNewComponent,
    OrderOpenComponent,
    OrderOpenEditComponent,
    OrderClosedComponent,
    OrderDetailsComponent
  ]
})
export class OrderModule {}
