import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from '../services/guards/logged-in.guard';
import { LegalAidHomeComponent } from './legal-aid-home/legal-aid-home.component';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [LoggedInGuard],
    component: LegalAidHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalAidHomeRoutingModule { }
