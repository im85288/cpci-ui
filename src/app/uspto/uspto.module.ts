import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsptoRoutingModule } from './uspto-routing.module';
import { UsptoComponent } from './uspto.component';

@NgModule({
  imports: [
    CommonModule,
    UsptoRoutingModule
  ],
  declarations: [UsptoComponent]
})
export class UsptoModule { }
