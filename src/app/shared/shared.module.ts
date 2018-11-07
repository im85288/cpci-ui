import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from "./search/search.component";
import {MaterialModule} from "../../fw/modules/material-module/material-module.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from 'ngx-mask'

import { DocumentIdDialogComponent } from './search/document-id-dialog/document-id-dialog.component';
import { DesignatedIdDialogComponent } from './search/designated-id-dialog/designated-id-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [SearchComponent, DocumentIdDialogComponent, DesignatedIdDialogComponent],
  exports: [
    SearchComponent
  ],
  entryComponents: [DocumentIdDialogComponent, DesignatedIdDialogComponent]
})
export class SharedModule { }
