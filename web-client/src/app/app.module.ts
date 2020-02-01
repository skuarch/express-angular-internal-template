import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { CustomMaterialModule } from './modules/custom-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { LoaderComponent } from './components/loader';
import { ProfileService } from './services/profile.service';
import { DialogService } from './services/dialog.service';
import { HeadersService } from './services/headers.service';
import { HttpService } from './services/http.service';
import { DashboardComponent } from './components/dashboard';
import { PageNotFoundComponent } from './components/page-not-found';
import { ToolbarComponent } from './components/toolbar';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorDialogComponent,
    LoaderComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    LogoutComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/web'
    },
    ProfileService,
    DialogService,
    HeadersService,
    HttpService,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoaderComponent,
    ErrorDialogComponent,
  ]
})
export class AppModule { }
