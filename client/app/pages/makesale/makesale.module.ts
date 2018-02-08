import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { MakesaleRoutingModule } from './makesale-routing.module';
import { MakesaleComponent } from './makesale.component';

@NgModule({
  imports: [ CommonModule, MakesaleRoutingModule, SharedModule ],
  declarations: [ MakesaleComponent ]
})
export class MakesaleModule {}