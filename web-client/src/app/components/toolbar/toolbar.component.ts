import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { SharedData } from 'src/app/models/shared-data';
import { ProfileService } from 'src/app/services/profile.service';
import { ErrorService } from '../../services/error.service';
import { Navigation } from '../../models/navigation';
import { AppError } from 'src/app/models/app-error';
import { Router } from '@angular/router';
import { LoaderComponent } from '../loader';
import { DialogService } from '../../services/dialog.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  profile: Profile = {
    designation: '',
    email: '',
    familyName: '',
    givenName: '',
    prid: '',
    userPrincipalName: '',
    lastUpdate: ''
  };

  constructor(
    private profileService: ProfileService,
    private errorService: ErrorService,
    private router: Router,
    private dialogService: DialogService) {
  }

  ngOnInit() {
    this.profileService
      .getProfile()
      .subscribe(
        res => {
          this.profile = res;
          SharedData.setProfile(res);
        },
        err => {
          const appError: AppError = {
            name: err.name,
            details: err.message,
            message: 'please check if your session is not expired, the service that retrive your profile is not responding',
            popUpCloseable: false,
            statusText: err.statusText,
            navigation: Navigation.ROOT,

          };
          this.errorService.handlerError(appError, false, Navigation.ROOT);
        }
      );
  }

  logout() {
    this.dialogService.openDialog(LoaderComponent);
    this.profileService.logout()
      .subscribe(data => {
        this.dialogService.closeDialog();
        this.router.navigate(['/logout']);
      }, err => {
        this.errorService.handlerError(err, false);
        throw err;
      });
  }

  navigateProfile() {
    this.router.navigate(['/profile']);
  }

}
