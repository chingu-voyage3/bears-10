import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { UserService } from './user.service';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [ CommonModule, HttpClientModule, RouterModule, SharedModule ],
  exports: [ NavbarComponent ],
  providers: [ UserService ],
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
