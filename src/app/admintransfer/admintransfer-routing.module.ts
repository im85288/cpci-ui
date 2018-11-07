import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdmintransferComponent} from "./admintransfer.component";

const routes: Routes = [
  {
    path: '',
    component: AdmintransferComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmintransferRoutingModule { }
