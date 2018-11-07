import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CpciinternationalRoutingModule} from './cpciinternational-routing.module';
import {CpcinternationalComponent} from './cpcinternational.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    CpciinternationalRoutingModule,
    SharedModule
  ],
  declarations: [CpcinternationalComponent]
})
export class CpciinternationalModule { }
