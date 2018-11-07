import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent, MatDialog} from "@angular/material";
import {DocumentIdDialogComponent} from "./document-id-dialog/document-id-dialog.component";
import {Document} from "../model/document";
import {DesignatedFamilyId} from "../model/designated-family-id";
import {DesignatedIdDialogComponent} from "./designated-id-dialog/designated-id-dialog.component";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  submitting = false;
  searchForm: FormGroup;
  designatedFamilyIdsFormControl: FormControl;
  documentIdsFormControl: FormControl;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  designatedFamilyIds: DesignatedFamilyId[] = [];
  documents: Document[] = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.designatedFamilyIdsFormControl = new FormControl({ value: '', disabled: true }, [Validators.pattern('[0-9]+'), Validators.maxLength(10)]);
    this.documentIdsFormControl = new FormControl({value:'', disabled: true}, [Validators.pattern('[A-Z]{2}[0-9]+[A-Z][0-9]?')]);
  }

  createForm() {
    this.searchForm = new FormGroup({
      designatedFamilyIdsFormControl: this.designatedFamilyIdsFormControl,
      documentIdsFormControl: this.documentIdsFormControl
    });
  }

  search() {
    if (this.searchValid()) {
      this.submitting = true;

      // simulate a long call for searching
      setTimeout(() => {
        this.submitting = false;
      }, 9000);
    }
  }

  removeDesignatedFamilyId(id: DesignatedFamilyId): void {
    const index = this.designatedFamilyIds.indexOf(id);

    if (index >= 0) {
      this.designatedFamilyIds.splice(index, 1);
    }
  }

  removeDocument(documentId: Document): void {
    const index = this.documents.indexOf(documentId);

    if (index >= 0) {
      this.documents.splice(index, 1);
    }
  }

  searchValid(): boolean {
    return (this.designatedFamilyIds.length > 0 || this.documents.length > 0);
  }

  showAddDesignatedIdWindow(): void {
    const dialogRef = this.dialog.open(DesignatedIdDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.designatedFamilyIds.push(result);
      }
    });
  }

  showAddDocumentIdWindow(): void {
    const dialogRef = this.dialog.open(DocumentIdDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.documents.push(result);
      }
    });
  }

  formattedDocument(document: Document): string {
    return `${document.office} ${document.sequenceCode} ${document.kindCode}`;
  }
}
