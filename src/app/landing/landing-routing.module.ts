import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { SignInComponent } from '../../fw/users/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: 'signin',
    component: LandingComponent,
    children: [
      { path: '', component: SignInComponent },
      { path: '**', component: SignInComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class LandingRoutingModule {}
