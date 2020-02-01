import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from '../../services/http.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ProfileService } from '../../services/profile.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SharedData } from '../../models/shared-data';
import { Profile } from 'src/app/models/profile';


describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let profileService: ProfileService;
  let httpTestingController: any;
  let sharedData: SharedData;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        Profile,
        SharedData,
        HttpService,
        HttpClient,
        HttpHandler,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        ProfileService
      ],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    profileService = fixture.debugElement.injector.get(ProfileService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test profile service', () => {
    const ps = fixture.debugElement.injector.get(ProfileService);
    expect(ps).toBeTruthy();
  });

  it('test profile service, getProfile', () => {
    expect(profileService).toBeTruthy();
    spyOn(profileService, 'getProfile').and.returnValue(null);
    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
  });

  it('test profile service, logout', () => {
    expect(profileService).toBeTruthy();
    spyOn(profileService, 'logout').and.returnValue(null);
    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
  });

  it('test profile service, getProfile 2', () => {
    const ps = TestBed.get(ProfileService);
    expect(ps).toBeTruthy();

    profileService.getProfile().subscribe((data: any) => {
      expect(data).toBeUndefined();
    }, (err: any) => {
      expect(err).toBeTruthy();
    });
  });

  it('test profile service, logout 2', () => {
    const ps = TestBed.get(ProfileService);
    expect(httpTestingController).toBeTruthy();
    expect(ps).toBeTruthy();

    profileService.logout().subscribe((data: any) => {
      expect(data).toEqual('profile is undefinied');
    },
      (err: any) => {
        expect(err).toEqual('profile is undefinied');
      });
  });

  it('test shared data profile, ', () => {
    sharedData = TestBed.get(SharedData);
    expect(sharedData).toBeTruthy();
  });

  it('test shared data get profile, ', () => {
    sharedData = TestBed.get(SharedData);
    expect(sharedData).toBeTruthy();
    spyOn(SharedData, 'getProfile').and.throwError;
  });

  it('test shared data set profile, ', () => {
    sharedData = TestBed.get(SharedData);
    expect(sharedData).toBeTruthy();
    spyOn(SharedData, 'setProfile')
      .and.callFake((p: any) => {
        expect(p).toBeFalsy();
        return '';
      })
      .and.throwError;
  });

  it('test shared data set profile 2, ', () => {
    const pf: Profile = TestBed.get(Profile);
    sharedData = TestBed.get(SharedData);
    expect(sharedData).toBeTruthy();
    spyOn(SharedData, 'setProfile')
      .and.callFake((p: any) => {
        expect(p).toBeFalsy();
        return pf;
      })
      .and.throwError;
  });

  it('test shared data set profile 3, ', () => {
    const pp: Profile = TestBed.get(Profile);
    expect(pp).toBeTruthy();
    pp.prid = '';
    sharedData = TestBed.get(SharedData);
    expect(sharedData).toBeTruthy();
    spyOn(SharedData, 'setProfile')
      .and.callFake((pf: Profile) => {
        return pf;
      })
      .and.throwError;
  });

});
