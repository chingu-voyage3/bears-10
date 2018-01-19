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
  MatSidenavModule,
  MatRadioModule,
  MatCardModule,
  MatDialogModule
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
    MatSidenavModule,
    MatRadioModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule
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
    MatSidenavModule,
    MatRadioModule,
    MatCardModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialModule {}
