import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { AppError } from '../../models/app-error';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent implements OnInit {

  appError: any;
  httpErrorResponse: HttpErrorResponse;

  constructor(
    public dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data && typeof AppError) {
      this.appError = data;
    } else {
      throw new Error('unknown error type');
    }
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.closeModal();
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  navigate(url: string): void {
    if (!url) {
      throw new Error('url is undefinied');
    }
    window.location.href = url;
  }

}
