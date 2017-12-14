import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [ CommonModule, FormsModule, MaterialModule ],
  exports: [ CommonModule, FormsModule, MaterialModule ],
  declarations: []
})
export class SharedModule {}
