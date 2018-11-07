import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsptoComponent} from "./uspto.component";

const routes: Routes = [
  {
    path: '',
    component: UsptoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsptoRoutingModule { }
