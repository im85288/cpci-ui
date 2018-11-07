import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmintransferRoutingModule } from './admintransfer-routing.module';
import { AdmintransferComponent } from './admintransfer.component';

@NgModule({
  imports: [
    CommonModule,
    AdmintransferRoutingModule
  ],
  declarations: [AdmintransferComponent]
})
export class AdmintransferModule { }
