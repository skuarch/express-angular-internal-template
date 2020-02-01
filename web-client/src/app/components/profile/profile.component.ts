import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile } from 'src/app/models/profile';
import { SharedData } from '../../models/shared-data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;
  constructor(private profileService: ProfileService) {
    this.profile = SharedData.getProfile();
  }

  ngOnInit() {

  }

}
