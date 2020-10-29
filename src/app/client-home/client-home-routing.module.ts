import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from '../services/guards/logged-in.guard';
import { ClientHomeComponent } from './client-home/client-home.component';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [LoggedInGuard],
    component: ClientHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientHomeRoutingModule { }
