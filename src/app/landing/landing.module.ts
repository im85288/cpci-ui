import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { FrameworkModule } from '../../fw/fw.module';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  imports: [CommonModule, LandingRoutingModule, FrameworkModule],
  declarations: [LandingComponent, TopbarComponent]
})
export class LandingModule {}
