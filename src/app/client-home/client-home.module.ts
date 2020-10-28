import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientHomeRoutingModule } from './client-home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClientHomeComponent } from './client-home/client-home.component';


@NgModule({
  declarations: [ClientHomeComponent],
  imports: [
    CommonModule,
    ClientHomeRoutingModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class ClientHomeModule { }
