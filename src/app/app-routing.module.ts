import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticatedUserComponent} from "./authenticated-user/authenticated-user.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {
    path: 'authenticated',
    component: AuthenticatedUserComponent,
    canActivate: [],
    children: [
      {
        path: '',
        canActivateChild: [],
        children: [
          {
            path: 'workinglist',
            loadChildren: './workinglist/workinglist.module#WorkinglistModule'
          },
          {
            path: 'cpci',
            loadChildren: './cpciinternational/cpciinternational.module#CpciinternationalModule'
          },
          {
            path: 'uspto',
            loadChildren: './uspto/uspto.module#UsptoModule'
          },
          {
            path: 'cpcno',
            loadChildren: './cpcnational/cpcnational.module#CpcnationalModule'
          },
          {
            path: 'admintransfer',
            loadChildren: './admintransfer/admintransfer.module#AdmintransferModule'
          },
          {
            path: 'producerconsumer',
            loadChildren: './producerconsumer/producerconsumer.module#ProducerconsumerModule'
          },
         { path: 'about', component: AboutComponent }
        ]
      }
    ]
  },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: '**', redirectTo: '/signin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
