import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  openDialog(dialog: any) {
    this.dialog.closeAll();
    this.dialog.open(dialog, { disableClose: true });
  }

  openDialogWithData(dialog: any, config?: any) {
    this.dialog.open(dialog, config);
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
