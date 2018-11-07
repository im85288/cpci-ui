import { NgModule } from '@angular/core';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule } from '@covalent/core/steps';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentLoadingModule, CovalentMessageModule } from '@covalent/core';
import { CovalentNotificationsModule } from '@covalent/core';
import { CovalentMenuModule } from '@covalent/core';
import { CovalentDialogsModule } from '@covalent/core';
import { CovalentFileModule } from '@covalent/core/file';

@NgModule({
  imports: [
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentMessageModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentFileModule
  ],
  exports: [
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentMessageModule,
    CovalentDynamicFormsModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentFileModule
  ]
})
export class CovalentModule {}
