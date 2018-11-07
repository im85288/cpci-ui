import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CpcnationalComponent} from "./cpcnational.component";

const routes: Routes = [
  {
    path: '',
    component: CpcnationalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpcnationalRoutingModule { }
