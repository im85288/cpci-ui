import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProducerconsumerComponent} from "./producerconsumer.component";

const routes: Routes = [
  {
    path: '',
    component: ProducerconsumerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducerconsumerRoutingModule { }
