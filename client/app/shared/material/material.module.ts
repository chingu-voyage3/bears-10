import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatTabsModule,
  MatExpansionModule,
  MatTableModule,
  MatSidenavModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatSidenavModule
  ],
  exports: [
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatSidenavModule
  ],
  declarations: []
})
export class MaterialModule {}
