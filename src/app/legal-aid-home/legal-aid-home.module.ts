import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalAidHomeRoutingModule } from './legal-aid-home-routing.module';
import { LegalAidHomeComponent } from './legal-aid-home/legal-aid-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LegalAidHomeComponent],
  imports: [
    CommonModule,
    LegalAidHomeRoutingModule,
    SharedModule
  ]
})
export class LegalAidHomeModule { }
