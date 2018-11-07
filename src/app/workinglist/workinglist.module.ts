import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WorkinglistRoutingModule} from './workinglist-routing.module';
import {WorkinglistComponent} from './workinglist/workinglist.component';
import {MaterialModule} from "../../fw/modules/material-module/material-module.module";

@NgModule({
  imports: [
    CommonModule,
    WorkinglistRoutingModule,
    MaterialModule
  ],
  declarations: [WorkinglistComponent]
})
export class WorkinglistModule { }
