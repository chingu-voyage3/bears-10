import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TextMaskModule } from 'angular2-text-mask';

import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [ CommonModule, FormsModule, MaterialModule, TextMaskModule ],
  exports: [ CommonModule, FormsModule, MaterialModule, TextMaskModule ],
  declarations: []
})
export class SharedModule {}
