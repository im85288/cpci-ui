import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-document-id-dialog',
  templateUrl: './document-id-dialog.component.html',
  styleUrls: ['./document-id-dialog.component.css']
})
export class DocumentIdDialogComponent implements OnInit {

  documentIdForm: FormGroup;
  office: FormControl;
  sequencenumber: FormControl;
  kindcode: FormControl;

  constructor(private dialogRef: MatDialogRef<DocumentIdDialogComponent>) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  dismiss() {
    this.dialogRef.close(null);
  }

  add() {
    const document = {office: this.office.value, sequenceCode: this.sequencenumber.value, kindCode: this.kindcode.value}
    this.dialogRef.close(document);
  }

  formattedDocument(): string {
    return `${this.office.value} ${this.sequencenumber.value} ${this.kindcode.value}`;
  }

  title(): string{
    return this.documentIdForm.valid ? this.formattedDocument() : `Document Identifier Input`;
  }

  private createFormControls() {
    this.office = new FormControl('', [Validators.pattern('[A-Z]{2}'), Validators.maxLength(2), Validators.required]);
    this.sequencenumber = new FormControl('', [Validators.pattern('\\w+'), Validators.required]);
    this.kindcode = new FormControl('', [Validators.pattern('[A-Z][0-9]?'), Validators.required]);
  }

  private createForm() {
    this.documentIdForm = new FormGroup({
      office: this.office,
      sequencenumber: this.sequencenumber,
      kindcode: this.kindcode
    });
  }
}
