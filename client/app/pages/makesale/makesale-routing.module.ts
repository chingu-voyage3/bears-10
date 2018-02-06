import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakesaleComponent } from './makesale.component';

const makesaleRoutes = [
  { path: '', component: MakesaleComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(makesaleRoutes) ],
  exports: [ RouterModule ]
})
export class MakesaleRoutingModule {}
