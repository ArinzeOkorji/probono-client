import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { RequestLegalAidFormComponent } from './request-legal-aid-form/request-legal-aid-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoggedInGuard } from './services/guards/logged-in.guard';

export const COMPONENTS = [
  AppComponent,
  RequestLegalAidFormComponent,
  CaseDetailsComponent
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'client',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./client-home/client-home.module').then(m => m.ClientHomeModule)
  },
  {
    path: 'request-legal-aid',
    canActivate: [LoggedInGuard],
    component: RequestLegalAidFormComponent
  },
  {
    path: 'case-details',
    canActivate: [LoggedInGuard],
    component: CaseDetailsComponent
  },
  {
    path: 'profile',
    canActivate: [LoggedInGuard],
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
