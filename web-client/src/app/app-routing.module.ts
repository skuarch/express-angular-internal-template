import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { PageNotFoundComponent } from './components/page-not-found';
import { DashboardComponent } from './components/dashboard';
import { LogoutComponent } from './components/logout';
import { ProfileComponent } from './components/profile';

import { Navigation } from './models/navigation';

const routes: Routes = [
  { path: '', redirectTo: '/' + Navigation.DASHBOARD, pathMatch: 'full', data: { title: 'Dashboard', back: false } },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard', back: false } },
  { path: 'profile', component: ProfileComponent, data: { title: 'Profile', back: false } },
  { path: 'logout', component: LogoutComponent, data: { title: 'logout', back: false } },
  { path: '**', component: PageNotFoundComponent, data: { title: 'Not Found', back: true } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/web'
    }
  ]
})
export class AppRoutingModule { }
