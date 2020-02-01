import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
    this.dialogService.closeDialog();
  }

}
