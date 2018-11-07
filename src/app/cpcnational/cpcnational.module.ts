import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpcnationalRoutingModule } from './cpcnational-routing.module';
import { CpcnationalComponent } from './cpcnational.component';

@NgModule({
  imports: [
    CommonModule,
    CpcnationalRoutingModule
  ],
  declarations: [CpcnationalComponent]
})
export class CpcnationalModule { }
