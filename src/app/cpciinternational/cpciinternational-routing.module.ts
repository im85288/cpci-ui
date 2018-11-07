import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CpcinternationalComponent} from "./cpcinternational.component";

const routes: Routes = [
  {
    path: '',
    component: CpcinternationalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpciinternationalRoutingModule { }
