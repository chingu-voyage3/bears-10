import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';

import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [ CommonModule, SharedModule ],
  exports: [ NavbarComponent ],
  declarations: [ NavbarComponent ]
})
export class CoreModule {
  constructor (
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
