import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProducerconsumerRoutingModule } from './producerconsumer-routing.module';
import { ProducerconsumerComponent } from './producerconsumer.component';

@NgModule({
  imports: [
    CommonModule,
    ProducerconsumerRoutingModule
  ],
  declarations: [ProducerconsumerComponent]
})
export class ProducerconsumerModule { }
