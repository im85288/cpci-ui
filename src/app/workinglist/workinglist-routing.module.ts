import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorkinglistComponent} from "./workinglist/workinglist.component";

const routes: Routes = [
  {
    path: '',
    component: WorkinglistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkinglistRoutingModule { }
