import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { UserService } from './user.service';
import { OrderService } from './order.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { LogoutDirective } from './directives/logout.directive';
import { ItemsService } from './items.service';

@NgModule({
  imports: [ CommonModule, HttpClientModule, RouterModule, SharedModule ],
  exports: [ NavbarComponent ],
  providers: [ UserService, ItemsService, OrderService ],
  declarations: [ NavbarComponent, LogoutDirective ]
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
