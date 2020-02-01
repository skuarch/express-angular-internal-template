import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import { Observable, throwError } from 'rxjs';
import { HttpService } from '../services/http.service';
import { EndPoints } from '../models/endpoints';
import { SharedData } from '../models/shared-data';


@Injectable({
    providedIn: 'root'
})

export class ProfileService {

    constructor(
        private httpService: HttpService
    ) { }

    getProfile(): Observable<Profile> {
        return this.httpService.get(EndPoints.PROFILE);
    }

    logout(): Observable<any> {
        const profile = SharedData.getProfile();
        if (!profile) {
            return throwError('profile is undefinied');
        }
        return this.httpService.post(EndPoints.LOGOUT, profile);
    }

}
