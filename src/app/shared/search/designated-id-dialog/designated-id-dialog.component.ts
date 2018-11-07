import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-designated-id-dialog',
  templateUrl: './designated-id-dialog.component.html',
  styleUrls: ['./designated-id-dialog.component.css']
})
export class DesignatedIdDialogComponent implements OnInit {

  designatedFamilyIdForm: FormGroup;
  id: FormControl;
  constructor(private dialogRef: MatDialogRef<DesignatedIdDialogComponent>) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  dismiss() {
    this.dialogRef.close(null);
  }

  add() {
    const id = {id: this.id.value}
    this.dialogRef.close(id);
  }

  private createFormControls() {
    this.id = new FormControl('', [Validators.pattern('[0-9]+'), Validators.required]);
  }

  private createForm() {
    this.designatedFamilyIdForm = new FormGroup({
      id: this.id,
    });
  }
}
