import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [ CommonModule, AdminRoutingModule, SharedModule ],
  declarations: [ AdminComponent ]
})
export class AdminModule {}
