import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoaderComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.close();
  }

  close() {
    this.dialogRef.close();
  }

}
